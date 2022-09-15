import React, { memo } from 'react'
import { Provider } from 'react-redux'
import store from '../../store/index'
import Routes from '../../routers/index'


const App = () => (
  <Provider store={store}>
      <Routes />
  </Provider>
)

export default memo(App)
