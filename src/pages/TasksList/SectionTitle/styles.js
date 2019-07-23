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

export const SortingContainer = styled.div`
  display: flex;
  margin-left: auto;
`

export const TasksDisplayType = styled.button`
`

export const Sorting = styled.div`
  display: flex;
  background-color:#fff;
  flex-direction: column;
  position: absolute;
  padding: 10px;
  z-index: 2;
  top: 18%;
  left: 69%;
  box-shadow: 0 0 5px rgba(0,0,0,0.2);
`

export const Priority = styled.div`
  display: flex;
  margin-bottom: 10px;
`

export const PriorityItem = styled.label`
  margin-right: 10px;
`
