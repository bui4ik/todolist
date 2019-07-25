import styled from 'styled-components'
import { backgroundColor } from 'config/theme'

export const Container = styled.div`
  display: flex;
`

export const Area = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  margin-left: 70px;
`

export const Content = styled.div`
  margin-top: 64px;
  width: 100%;
  background-color: ${backgroundColor};
  padding: 15px 35px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`
