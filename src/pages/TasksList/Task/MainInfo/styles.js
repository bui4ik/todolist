import styled from 'styled-components'
import { backgroundColor, mainButtonColor, mainTextColor, taskBorderColor } from 'config/theme'

export const Container = styled.div`
  display: flex;
  width: 100%;
`

export const Name = styled.div`
  font-weight: 700;
  margin-bottom: 5px;
  color: ${mainTextColor};
  opacity: 0.9;
`

export const Description = styled.div`
  margin-bottom: 5px;
  color: #8d919c;
  opacity: 0.8;
  font-size: 14px;
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
  width: 150px;
  background-color: ${backgroundColor};
  border: 1px solid ${taskBorderColor};
  top: 40%;
  left: -570%;
  box-shadow: 0 0 2px rgba(0,0,0,0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  z-index: 2;
`

export const EditTaskButton = styled.button`
  font-size: 12px;
  margin-bottom: 5px;
  border: none;
  width: 120px;
  background-color: ${mainButtonColor};
  color: #fff;
`
