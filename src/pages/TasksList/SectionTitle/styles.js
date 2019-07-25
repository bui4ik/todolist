import styled from 'styled-components'
import { mainButtonColor, mainTextColor} from 'config/theme'

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`

export const Title = styled.div`
  font-size: 27px;
  font-weight: 700;
  margin-right: 10px;
  color: ${mainTextColor};
  
  @media (max-width: 768px ) {
   font-size: 15px;
  }
`

export const TasksCount = styled.div`
  padding-bottom: 5px;
  font-size: 27px;
  font-weight: 700;
  color: #8996b2;
  
  @media (max-width: 768px ) {
   font-size: 15px;
  }
`

export const SortingContainer = styled.div`
  display: flex;
  margin-left: auto;
  align-items: center;
`

export const ViewButton = styled.button`
  width: 30px;
  height: 25px;
  border: none;
  background-color: transparent;
  margin-right: 10px;
  
  svg {
  width: 20px;
  height: 20px;
  color: aqua;
  fill: ${mainTextColor};
  
  }
  
  @media (max-width: 768px ) {
   margin-right: 5px;
  }
`

export const SortByDateButton = styled.button`
  font-size: 12px;
  margin-right: 10px;
  border: none;
  background-color: transparent;
  color: ${mainButtonColor};
  font-weight: 700;
`


export const TasksDisplayTypeContainer = styled.div`
  position: relative;
`

export const TasksDisplayTypeButton = styled.button`
  width: 120px;
  font-size: 12px;
  margin-right: 10px;
  border: none;
  background-color: transparent;
  color: ${mainButtonColor};
  font-weight: 700;
  
    @media (max-width: 768px ) {
    width: 40px
  }
`

