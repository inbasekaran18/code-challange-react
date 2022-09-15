import * as url from '../constants/commonConstant'
import { get, getAll } from './common'

const getPlanetsList = async () => await get(`${url.PLANET_URL}`)
const getPlanetsInfo = async (id) => {
  return await get(`${url.PLANET_URL}/${id}`)
}
const getAllData = async (urls) => {
  return await getAll(urls)
}

export { getPlanetsList, getPlanetsInfo, getAllData }
