import styled from 'styled-components'
import { mainButtonColor, mainTextColor } from 'config/theme'
import { Form } from 'react-final-form'

export const Title = styled.div`
  font-size: 27px;
  font-weight: 700;
  margin-right: 10px;
  margin-bottom: 10px;
  color: ${mainTextColor};
`

export const Container = styled.div`
  display: flex;
  align-items: center;
`

export const SettingName = styled.div`
  color: ${mainTextColor};
  margin-right: 10px;
`

export const ColorsForm = styled.form`
  display: flex;
  align-items: center;
`

export const ColorsLabel = styled.label`
  color: ${mainTextColor};
  margin-right: 10px;
`

export const ColorsButton = styled.button`
    border-radius: 30px;
    background-color: ${mainButtonColor};
    color: #fff;
    font-size: 13px;
    font-weight: 700;
    width: 110px;
    height: 25px;
    margin-right: 15px;
    border: none;
`
