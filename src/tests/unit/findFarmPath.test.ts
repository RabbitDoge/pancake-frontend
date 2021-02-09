import { getAllFarmsForToken, findDirectFarm, findFarmPath } from 'utils/getPrice'
import farmsMock from '../mocks/farms'

describe('getPrice', () => {
  describe('getAllFarmsForToken', () => {
    it('getAllFarmsForToken INJ', () => {
      const result = getAllFarmsForToken(farmsMock, 'INJ')
      expect(result).toHaveLength(1)
      expect(result[0].pid).toBe(27)
    })
    it('getAllFarmsForToken USDT', () => {
      const result = getAllFarmsForToken(farmsMock, 'USDT')
      expect(result).toHaveLength(2)
      expect(result[0].pid).toBe(11)
      expect(result[1].pid).toBe(17)
    })
    it('getAllFarmsForToken UST', () => {
      const result = getAllFarmsForToken(farmsMock, 'UST')
      expect(result).toHaveLength(5)
    })
  })
  describe('findDirectFarm', () => {
    it('findDirectFarm CAKE BNB', () => {
      const result = findDirectFarm('CAKE', 'BNB')
      expect(result.pid).toBe(1)
    })
    it('findDirectFarm CAKE DOGECOIN', () => {
      const result = findDirectFarm('CAKE', 'DOGECOIN')
      expect(result).toBeNull()
    })
  })
  describe('findFarmPath', () => {
    it('findDirectFarm CAKE BNB', () => {
      const allPaths = []
      findFarmPath('CAKE', 'BNB', allPaths, [])
      expect(allPaths).toHaveLength(1)
      expect(allPaths[0]).toHaveLength(1)
      expect(allPaths[0][0].pid).toBe(1)
    })
  })
})
