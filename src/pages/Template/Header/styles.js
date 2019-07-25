import styled from 'styled-components'
import { backgroundColor, mainButtonColor, mainTextColor } from 'config/theme'
import photo from 'assets/spiderman.jpg'

export const Header = styled.div`
  height: 64px;
  display: flex;
  position: fixed;
  align-items: center;
  padding: 10px 20px;
  width: calc(100% - 60px);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
  background-color: ${backgroundColor};
  z-index: 4;
`
export const Hamburger = styled.div`
  position: relative;
  z-index: 1;
  display: block;
`

export const HamburgerBar = styled.div`
  width: 20px;
  height: 3px;
  background-color: ${mainTextColor};
  margin: 5px 0;
  transition: 0.3s;
`

export const ButtonsContainer = styled.div`
  margin-left: auto;
  margin-right: 20px;
  display: flex;
  align-items: center;
`

export const Sort = styled.div`
  margin-right: 15px;
  font-size: 18px;
  font-weight: 700;
  padding-top: 5px;
`

export const Button = styled.button`
  border-radius: 30px;
  background-color: ${mainButtonColor};
  color: #fff;
  font-size: 13px;
  font-weight: 700;
  width: 130px;
  height: 40px;
  margin-right: 15px;
  border: none;
  
  :hover{
  opacity: 0.9;
  }
`

export const UserPhoto = styled.div`
  width: 40px;
  height: 40px;
  background-image: url(${photo});
  background-size: cover;
  top: 50%;
  left: 50%;
  border-radius: 50%; 
`
