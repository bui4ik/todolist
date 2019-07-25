import React from 'react'
import * as S from '../styles'

const DescriptionTextArea = () => (
  <S.TaskName>
    <label>Description</label>
    <S.FieldInput name="description" component="textarea" required />
  </S.TaskName>
)

export default DescriptionTextArea
