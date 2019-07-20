import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  background-color: #fff;
  border: 1px solid #eceef3;
  min-height: 100px;
  padding: 5px 20px;
  margin-bottom: 10px;
  display: flex;
`
export const Badge = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ba68c8;
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`

export const BadgeLetter = styled.div`
  color: #fff;
  font-size: 25px;
`

export const AdditionalInfoContainer = styled.div`
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
`

export const Date = styled.div`
  font-size: 12px;
  color: #c6cdda;
`

export const TaskBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const MainInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Name = styled.div`
  font-weight: 700;
  margin-bottom: 5px;
`

export const Description = styled.div`
  margin-bottom: 5px;
  color: #8d919c;
`


