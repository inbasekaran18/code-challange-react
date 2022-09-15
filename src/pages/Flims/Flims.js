import React, { memo, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import Progress from '../../components/ProgressBar'
import { getFlimInfo } from '../../store/actions'
import { flimsHeader } from '../../constants/tableHeaders'
import ContainerDetails from '../../components/DetailsContainer'
import { RouterLinkConst } from '../../constants/routesLink'
import BackButton from '../../components/Button/backButtton'
import { Container } from 'reactstrap'
import Grid from '../../components/Grid'
import './flims.css'
const FlimInfo = ({ match }) => {
  const dispatch = useDispatch()

  const { flimInfo, isLoading, error } = useSelector((state) => {
    return {
      flimInfo: state.FlimInfoDetails.flimInfo || [],
      isLoading: state.FlimInfoDetails.isLoading,
      error: state.FlimInfoDetails.error
    }
  })

  useEffect(() => {
    const {
      params: { id }
    } = match
    dispatch(getFlimInfo(id))
  }, [dispatch, match])

  return (
    <>
      <Container className="bg-light border center-text">
        {isLoading && <Progress />}
        {error.error && <ContainerDetails Title={error.message} />}
        {!isLoading && !error.error && (
          <>
            <div className="backButton">
              <BackButton
                path={RouterLinkConst.home}
                color="dark"
                label="Back"
              />
            </div>
            <h2>Planet Flims Details </h2>
            <Grid values={flimInfo} header={flimsHeader} />
          </>
        )}
      </Container>
    </>
  )
}

export default memo(FlimInfo)

FlimInfo.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  }).isRequired
}