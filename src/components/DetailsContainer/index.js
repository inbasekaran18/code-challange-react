import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import BackButton from '../Button/backButtton'
import { RouterLinkConst } from '../../constants/routesLink'
import PropTypes from 'prop-types'
const ContainerDetails = ({ Header=[],Data={},Title }) => {
  return (
    <>
      <Container className="bg-light border">
        <div className="backButton">
          <BackButton path={RouterLinkConst.home} color="dark" label="Back" />
        </div>
        <h2>{Title}</h2>
        <Row xs="2">
          {Header.map((item) => (
            <Col className="bg-light border" key={item.key}>
              <h5>{item.name}</h5>
              <p>{Data[item.key]}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}

export default ContainerDetails

ContainerDetails.propTypes = {
  Header: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      key: PropTypes.string
    })
  ).isRequired,
  Data: PropTypes.shape({}, true).isRequired,
  Title: PropTypes.string.isRequired
}


ContainerDetails.defaultProps = {
  Header: [],
  Data: {},
  Title: "Unknown Details"
}