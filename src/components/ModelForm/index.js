import React, { memo } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { createValidationSchema } from '../../utils/validation'
import PropTypes from 'prop-types'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Container,
  Row,
  Col,
  Label
} from 'reactstrap'
const PopUpForm = ({
  open,
  handleClose,
  handleClick,
  FormInput = [],
  initialValue = {}
}) => {
  const formValidation = createValidationSchema(FormInput)
  return (
    <div>
      <Modal isOpen={open} backdrop="static">
        <ModalHeader>Add Planet</ModalHeader>
        <Formik
          initialValues={initialValue}
          validationSchema={formValidation}
          onSubmit={(values, actions) => {
            console.log(values)
            handleClick()
            actions.setSubmitting(true)
          }}
          validateOnChange={false}
        >
          {({ isSubmitting }) => (
            <Form>
              <ModalBody>
                <Container>
                  {FormInput.map((data) => {
                    return (
                      <>
                        {data.type === 'text' || data.type === 'number' ? (
                          <Row key={Math.random()}>
                            <Col xs="3">
                              <Label for="exampleEmail">{data.label}</Label>
                            </Col>
                            <Col xs="6">
                              <Field name={data.name} type={data.type} />
                              <ErrorMessage name={data.name} component="div" />
                            </Col>
                          </Row>
                        ) : (
                          <Row key={Math.random()}>
                            <Col xs="3">
                              <Label for="exampleEmail">{data.label}</Label>
                            </Col>
                            <Col xs="6">
                              <Field as={data.type} name={data.name}>
                                {data?.options?.map((option) => {
                                  return (
                                    <option value={option.key}>
                                      {option.label}
                                    </option>
                                  )
                                })}
                              </Field>
                              <ErrorMessage name={data.name} component="div" />
                            </Col>
                          </Row>
                        )}
                      </>
                    )
                  })}
                </Container>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" type="submit" disabled={isSubmitting}>
                 Submit
                </Button>{' '}
                <Button color="secondary" onClick={() => handleClose()}>
                  Cancel
                </Button>
              </ModalFooter>
            </Form>
          )}
        </Formik>
      </Modal>
    </div>
  )
}

export default memo(PopUpForm)
PopUpForm.propTypes = {
  FormInput: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  initialValue: PropTypes.shape({}),
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  handleClick: PropTypes.func
}
PopUpForm.defaultProps = {
  FormInput: [],
  initialValue: {},
  open: false,
  handleClose: () => {},
  handleClick: () => {}
}