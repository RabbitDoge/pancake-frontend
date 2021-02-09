import farmsConfig from 'config/constants/farms'
import { FarmConfig } from 'config/constants/types'

export const getAllFarmsForToken = (farms: FarmConfig[], token: string): FarmConfig[] => {
  return farms.filter((farm) => farm.tokenSymbol === token || farm.quoteTokenSymbol === token)
}

export const findDirectFarm = (tokenA: string, tokenB: string): FarmConfig => {
  const farmsWithA = getAllFarmsForToken(farmsConfig, tokenA)
  const farmsWithAandB = getAllFarmsForToken(farmsWithA, tokenB)
  return farmsWithAandB.length > 0 ? farmsWithAandB[0] : null
}

export const findFarmPath = (tokenA: string, tokenB: string, allPaths: FarmConfig[][], currentPath: FarmConfig[]) => {
  const directFarm = findDirectFarm(tokenA, tokenB)
  if (directFarm) {
    allPaths.push([...currentPath, directFarm])
    // return
  }
  const farmsWithA = getAllFarmsForToken(farmsConfig, tokenA)
  farmsWithA.forEach((f) => {
    // Take the counter part of tokenA
    const tokenN = f.tokenSymbol === tokenA ? f.quoteTokenSymbol : f.tokenSymbol
    const path = findFarmPath(tokenN, tokenB, allPaths, [...currentPath, f])
  })

  // return null
}

export default findFarmPath
