import React from 'react'
import * as S from '../styles'

const TitleInput = () => (
  <S.TaskName>
    <label>Title</label>
    <S.FieldInput name="name" component="input" type="text" required />
  </S.TaskName>
)

export default TitleInput
