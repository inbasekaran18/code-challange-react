import React, { memo, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Progress from '../../components/ProgressBar'
import { getPlanetInfo } from '../../store/actions'
import { planetInfoFormat } from '../../utils/parsePlanetInfo'
import { planetHeader } from '../../constants/tableHeaders'
import ContainerDetails from '../../components/DetailsContainer'
import PropTypes from 'prop-types'
import './PlanetsInfo.css';
const PlanetInfo = ({ match }) => {
  const dispatch = useDispatch()

  const { planeInfo, isLoading, error } = useSelector((state) => {
    return {
      planeInfo: planetInfoFormat(state.PlanetInfoDetails.planetInfo) || {},
      isLoading: state.PlanetInfoDetails.isLoading,
      error: state.PlanetInfoDetails.error
    }
  })

  useEffect(() => {
    const {
      params: { id }
    } = match
    dispatch(getPlanetInfo(id))
  }, [dispatch, match])

  return (
    <>
      {isLoading && <Progress />}
      {error.error && <ContainerDetails Title={error.message} />}
      {!isLoading && !error.length > 0 && (
        <ContainerDetails
          Header={planetHeader}
          Data={planeInfo}
          Title="Planet Details"
        />
      )}
    </>
  )
}

export default memo(PlanetInfo)

PlanetInfo.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  }).isRequired
}