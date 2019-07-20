import styled from 'styled-components'
import ReactSVG from 'react-svg'
import { NavLink } from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 70px;
  height: 100vh;
  background-color: #0d1934;
  position: fixed;
  
  svg {
  width: 40px;
  height: 40px;
  }
`

export const Logo = styled(ReactSVG)`
  margin: 9px auto;
`

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
`

export const Item = styled(NavLink)`
  width: 100%;
  height: 50px;
  color: #fff;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  
  svg{
  width: 20px;
  height: 20px;
  }
  
  &.active{
  transition: background-color 0.5s ease;
  background-color: #122143;
  border-left: 4px solid #4773df;
  }
`
