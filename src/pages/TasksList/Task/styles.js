import styled from 'styled-components'
import { backgroundColor, taskBorderColor } from 'config/theme'

export const Container = styled.div`
  min-width: 270px;
  width: ${({viewType}) => viewType === 'column' ? '100%' : '32%'};
  background-color: ${backgroundColor};
  border: 1px solid ${taskBorderColor};
  min-height: 100px;
  padding: 5px 10px;
  margin-bottom: 5px;
  display: flex;
  margin-right: 10px;
`

export const TaskBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`




