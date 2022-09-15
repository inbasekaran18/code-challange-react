import axios from 'axios'
import { BASE_URL } from '../../constants/commonConstant'

export async function get(url) {
  try {
    return await axios.get(`${BASE_URL}${url}`).then((response) => {
      return response.data
    })
  } catch (error) {
    throw new Error(error)
  }
}

export async function getAll(urls) {
  try {
    if (urls.length === 0) {
      return []
    }
    const promiseArrayUrl = urls.map((url) => axios.get(url))
    const result = (await Promise.all(promiseArrayUrl)).map(
      (response) => response.data
    )
    return result
  } catch (error) {
    throw new Error(error)
  }
}
