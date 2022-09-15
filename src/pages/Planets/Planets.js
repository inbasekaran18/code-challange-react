import React, { memo, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RouterPushLinks } from '../../constants/routesLink'
import { useHistory } from 'react-router-dom'
import './Planets.css'
import Grid from '../../components/Grid'
import { NotificationContainer, NotificationManager } from 'react-notifications'
import { getPlanetList } from '../../store/actions'
import { planetDataFormat } from '../../utils/parsePlanetInfo'
import { planetHeader } from '../../constants/tableHeaders'
import { headerTypes } from '../../utils/headerTypes'
import ModelForm from '../../components/ModelForm'
import {Container} from 'reactstrap'
import 'react-notifications/lib/notifications.css'
import Progress from '../../components/ProgressBar'
import { FormInput, planetInitalValue } from '../../constants/formConstant'
function Planets() {
  const history = useHistory()
  const dispatch = useDispatch()
  const [formState, setFormState] = useState(false)
  const { planetDetails, isLoading, error } = useSelector((state) => {
    return {
      planetDetails: planetDataFormat(state.PlanetListDetails.planetList) || [],
      isLoading: state.PlanetListDetails.isLoading,
      error: state.PlanetListDetails.error
    }
  })
 
  useEffect(() => {
    dispatch(getPlanetList())
  }, [dispatch])

  //Handle the model form
  const handleClose = () => {
    setFormState(false)
    NotificationManager.error('Cancelled', 'Error!')
  }
  const handleOpen = () => setFormState(true)
  const handleFormData = () => {
    setFormState(false)
     NotificationManager.success('form submitted successfully', 'Message!');
  }
 const parsedHeaders = headerTypes(planetDetails, planetHeader)
  const actions = [
    {
      label: 'Planet Details',
      key: 'planetDetails',
      color: 'dark',
      action: (id) => history.push(`${RouterPushLinks.planet}/${id}`)
    },
    {
      label: 'Go to Films',
      key: 'flims',
      color: 'dark',
      action: (id) =>
        history.push(`${RouterPushLinks.planet}/${id}/${RouterPushLinks.films}`)
    },
    {
      label: 'Go to Residents',
      key: 'residents',
      color: 'dark',
      action: (id) =>
        history.push(
          `${RouterPushLinks.planet}/${id}/${RouterPushLinks.residents}`
        )
    },
    {
      label: 'Add New Planet',
      color: 'dark',
      key: 'planets',
      action: (row) => {
        handleOpen()
      }
    }
  ]

  return (
    <Container className="bg-light border center-text">
      <NotificationContainer />
      {isLoading && <Progress />}
      {error.error && <h1>{error.message}</h1>}
      {!isLoading && !error.error && (
        <>
          <h2>Planets list </h2>
          <Grid
            values={planetDetails}
            header={parsedHeaders}
            actions={actions}
          />
          <ModelForm
            open={formState}
            handleClose={handleClose}
            handleClick={handleFormData}
            FormInput={FormInput}
            initialValue={planetInitalValue}
          />
        </>
      )}
    </Container>
  )
}

export default memo(Planets)
