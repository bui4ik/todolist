import React from 'react'
import { Field, Form } from 'react-final-form'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Template from '../Template'
import * as S from './styles'
import * as selectors from '../../store/tasksList/selectors'
import * as actions from '../../store/tasksList/actions'

const Settings = ({actions: {changeColorScheme}, colorScheme}) =>{
  const onSubmit = ({colorScheme}) =>{
    changeColorScheme(colorScheme);
  }

  return(
    <Template>
      <S.Title>Settings</S.Title>
      <S.Container>
        <S.SettingName>Change color scheme</S.SettingName>
        <Form
          onSubmit={onSubmit}
          initialValues={{colorScheme: colorScheme}}
          render={({ handleSubmit, submitting, pristine }) => (
            <S.ColorsForm onSubmit={handleSubmit}>
              <div>
                <div>
                  <S.ColorsLabel>
                    <Field name="colorScheme" component="input" type="radio" value="light" required />{' '}
                    Light
                  </S.ColorsLabel>
                  <S.ColorsLabel>
                    <Field name="colorScheme" component="input" type="radio" value="dark" required />{' '}
                    Dark
                  </S.ColorsLabel>
                </div>
              </div>
              <div className="buttons">
                <S.ColorsButton type="submit" disabled={submitting || pristine}>
                  Change color
                </S.ColorsButton>
              </div>
            </S.ColorsForm>
          )}
        />
      </S.Container>
    </Template>
  )
}

const mapStateToProps = state => {
  return {
    colorScheme: selectors.colorSchemeSelector(state),
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      changeColorScheme: actions.setColorScheme
    },
    dispatch,
  ),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Settings)
