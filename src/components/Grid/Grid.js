import React, { memo } from 'react'
import { Table } from 'reactstrap'
import ButtonComponent from '../Button/index'
import './Grid.css'
import PropTypes from 'prop-types'

function Grid({ header = [], values = [], actions = [] }) {
  return (
    <>
      {values.length > 0 ? (
        <Table responsive>
          <thead>
            <tr className="table-dark" key={Math.random()}>
              {header.map((colName) => (
                <th
                  key={Math.random()}
                  align={colName.isNumber ? 'right' : 'center'}
                >
                  {colName.name}
                </th>
              ))}
              {!!actions.length && <th>Actions</th>}
            </tr>
          </thead>
          <tbody>
            {values.map((row, index) => (
              <tr key={Math.random()}>
                {header.map((colName) => (
                  <td
                    key={Math.random()}
                    align={colName.isNumber ? 'right' : 'center'}
                  >
                    {row[colName.key]}
                  </td>
                ))}
                {!!actions.length && (
                  <td key={Math.random()}>
                    {actions.map((item, index) => {
                      return (
                        <ButtonComponent
                          data={item}
                          id={row.id}
                          key={Math.random()}
                        />
                      )
                    })}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        'No Data Available'
      )}
    </>
  )
}

export default memo(Grid)

Grid.propTypes = {
  header: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      key: PropTypes.string
    })
  ).isRequired,
  values: PropTypes.arrayOf(PropTypes.shape({}, true)).isRequired,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string,
      label: PropTypes.string,
      action: PropTypes.func,
      key: PropTypes.string
    })
  )
}