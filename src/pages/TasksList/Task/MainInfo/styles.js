import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
`

export const Name = styled.div`
  font-weight: 700;
  margin-bottom: 5px;
`

export const Description = styled.div`
  margin-bottom: 5px;
  color: #8d919c;
`

export const EditTaskContainer = styled.div`
  margin-left: auto;
  display: flex;
  position: relative;
`

export const MoreContainer = styled.div` 
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  border: none;
  background-color: transparent;
  padding-top: 10px;
  cursor: pointer;
  
  svg {
  width: 25px;
  height: 25px;
  }
`

export const EditTask = styled.div`
  margin-left: auto;
  padding: 10px;
  width: 151px;
  height: 90px;
  background-color: #fff;
  top: 40%;
  left: -570%;
  box-shadow: 0 0 2px rgba(0,0,0,0.3);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
`

export const EditTaskButton = styled.button`
  font-size: 12px;
`
