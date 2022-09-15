import React, { memo, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import Progress from '../../components/ProgressBar'
import { getResidentInfo } from '../../store/actions'
import { residentHeader } from '../../constants/tableHeaders'
import ContainerDetails from '../../components/DetailsContainer'
import { RouterLinkConst } from '../../constants/routesLink'
import BackButton from '../../components/Button/backButtton'
import { Container } from 'reactstrap'
import Grid from '../../components/Grid'
import './Residents.css'
const ResidentInfo = ({ match }) => {
  const dispatch = useDispatch()

  const { residentInfo, isLoading, error } = useSelector((state) => {
    return {
      residentInfo: state.ResidentInfoDetails.residentInfo || {},
      isLoading: state.ResidentInfoDetails.isLoading,
      error: state.ResidentInfoDetails.error
    }
  })

  useEffect(() => {
    const {
      params: { id }
    } = match
    dispatch(getResidentInfo(id))
  }, [dispatch, match])

  return (
    <>
      <Container className="bg-light border center-text">
        {isLoading && <Progress />}
        {error.error && <ContainerDetails Title={error.message} />}
        {!isLoading && !error.error > 0 && (
          <>
            <div className="backButton">
              <BackButton
                path={RouterLinkConst.home}
                color="dark"
                label="Back"
              />
            </div>
            <h2>Planet Residents Details </h2>
            <Grid values={residentInfo} header={residentHeader} />
          </>
        )}
      </Container>
    </>
  )
}

export default memo(ResidentInfo)
ResidentInfo.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  }).isRequired
}