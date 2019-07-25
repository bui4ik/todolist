import React from 'react'
import { Field } from 'react-final-form'
import * as S from '../styles'

const PriorityRadioButtons = () => (
  <S.RadioButtonsContainer>
    <S.RadioButtonsLabel>Priority</S.RadioButtonsLabel>
    <div>
      <S.RadioButtonsItem priority='Low'>
        <Field name="priority" component="input" type="radio" value="Low" required /> Low
      </S.RadioButtonsItem>
      <S.RadioButtonsItem priority='Medium'>
        <Field name="priority" component="input" type="radio" value="Medium" required /> Medium
      </S.RadioButtonsItem>
      <S.RadioButtonsItem priority='High'>
        <Field name="priority" component="input" type="radio" value="High" required /> High
      </S.RadioButtonsItem>
    </div>
  </S.RadioButtonsContainer>
)

export default PriorityRadioButtons
