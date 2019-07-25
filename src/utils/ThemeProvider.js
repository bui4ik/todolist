import React from 'react'
import { ThemeProvider as SCThemeProvider } from 'styled-components'
import * as selectors from '../store/tasksList/selectors'
import { connect } from 'react-redux'

const ThemeProvider = ({ children, colorScheme }) => (
  <SCThemeProvider theme={{ mode: colorScheme }}>
    {children}
  </SCThemeProvider>
)

const mapStateToProps = state => {
  return {
    colorScheme: selectors.colorSchemeSelector(state),
  }
}

export default connect(
  mapStateToProps,
  null,
)(ThemeProvider)
