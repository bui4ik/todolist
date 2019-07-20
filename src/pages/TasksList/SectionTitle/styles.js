import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`

export const Title = styled.div`
  font-size: 36px;
  font-weight: 700;
  margin-right: 10px;
`

export const TasksCount = styled.div`
  padding-bottom: 5px;
  font-size: 36px;
  font-weight: 700;
  color: #8996b2;
`

export const TasksDisplayType = styled.div`
  margin-left: auto;
  display: ${props => props.showView ? null : 'none'};
`
