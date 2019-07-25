import styled from 'styled-components'
import { mainTextColor } from 'config/theme'
import Moment from 'react-moment'

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  justify-self: flex-end;
`

export const Priority = styled.div`
  margin-right: 10px;
  font-weight: 700;
  font-size: 12px;
  color:  ${props => { switch (props.priority) {
  case 'High':
    return '#f45d22'
  case 'Medium':
    return '#e0245e'
  case 'Low': 
    return '#794bc4'
  default:
    return '#212121'
}}};
`

export const CompleteStatus = styled.div`
  margin-right: 10px;
  font-weight: 700;
  font-size: 12px;
  color: #17bf63;
`

export const CreationDate = styled(Moment)`
  color: ${mainTextColor};
  font-size: 12px;
  opacity: 0.8;
`
