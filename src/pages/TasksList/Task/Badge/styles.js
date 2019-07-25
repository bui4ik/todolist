import styled from 'styled-components'

export const Container = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${(props)=> props.badgeColor};
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`

export const Letter = styled.div`
  color: #fff;
  font-size: 25px;
`
