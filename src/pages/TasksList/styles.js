import styled from 'styled-components'

export const TasksTable = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${({viewType}) => viewType === 'column' ? 'column' : 'row'}
`










