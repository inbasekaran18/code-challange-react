import {
  PLANET_URL_REPLACE,
  RESIDENT_URL_REPLACE,
  FLIMS_URL_REPLACE
} from '../constants/commonConstant'

export const planetDataFormat = (planetsDetails) =>
  planetsDetails.map((planet) => {
    const { url } = planet
    const id = parseInt(url.replace(PLANET_URL_REPLACE, ''), 10)
    return {
      ...planet,
      residents: planet?.residents ? planet.residents.length : 0,
      films: planet?.films ? planet.films.length : 0,
      id,
      residentsId:
        planet.residents && planet?.residents?.length > 0
          ? parseInt(
              planet?.residents[planet.residents.length - 1].replace(
                RESIDENT_URL_REPLACE,
                ''
              ),
              10
            )
          : NaN,
      filmsId:
        planet.films && planet?.films?.length > 0
          ? parseInt(
              planet?.films[planet.films.length - 1].replace(
                FLIMS_URL_REPLACE,
                ''
              ),
              10
            )
          : NaN
    }
  })

export const planetInfoFormat = (planetObject) => ({
  ...planetObject,
  residents: planetObject?.residents ? planetObject.residents.length : 0,
  films: planetObject?.films ? planetObject.films.length : 0,
})


