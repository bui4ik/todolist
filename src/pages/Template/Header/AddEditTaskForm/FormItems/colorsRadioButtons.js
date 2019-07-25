import React from 'react'
import { Field } from 'react-final-form'
import * as S from '../styles'

const ColorsRadioButtons = () => (
  <S.RadioButtonsContainer>
    <S.RadioButtonsLabel>Select Color</S.RadioButtonsLabel>
    <Field name="badgeColor" component="select">
      <option />
      <option value="#1da1f2">💙 Blue</option>
      <option value="#ffad1f">💛 Yellow</option>
      <option value="#e0245e">💗 Pink</option>
      <option value="#e0245e">💜 Purple</option>
      <option value="#f45d22">🧡 Orange</option>
      <option value="#17bf63">💚 Green</option>
    </Field>
  </S.RadioButtonsContainer>
)

export default ColorsRadioButtons
