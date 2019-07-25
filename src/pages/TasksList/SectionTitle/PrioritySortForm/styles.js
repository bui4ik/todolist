import styled from 'styled-components'
import {
  backgroundColor,
  mainButtonColor,
  mainTextColor,
  taskBorderColor,
} from '../../../../config/theme'

export const Sorting = styled.div`
  display: flex;
  background-color: ${backgroundColor};
  color: ${mainTextColor};
  border: 1px solid ${taskBorderColor};
  flex-direction: column;
  position: absolute;
  padding: 10px;
  z-index: 2;
  top: 100%;
  left: -114%;
  box-shadow: 0 0 5px rgba(0,0,0,0.2);
`

export const Priority = styled.div`
  display: flex;
  margin-bottom: 10px;
`

export const PriorityItem = styled.label`
  margin-right: 10px;
`

export const PrioritySubmitButton = styled.button`
  border: none;
  color: #fff;
  background-color: ${mainButtonColor};
  width: 60px;
  border-radius: 30px;
  font-size: 14px;
`
