import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import ThemeProvider from 'utils/ThemeProvider'
import store, { history, persistor } from 'store'
import Routes from 'routes'
import GlobalStyle from 'GlobalStyle'
import { PersistGate } from 'redux-persist/integration/react'
import { HashRouter } from 'react-router-dom'

const App = () => (
  <>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <HashRouter>
          <ThemeProvider>
            <Routes />
          </ThemeProvider>
        </HashRouter>
      </PersistGate>
    </Provider>
    <GlobalStyle />
  </>
)

export default App
