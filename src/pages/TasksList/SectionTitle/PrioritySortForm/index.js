import React from 'react'
import * as S from './styles'
import { Field, Form } from 'react-final-form'
import OutsideClickHandler from 'react-outside-click-handler/esm/OutsideClickHandler'

const PrioritySortForm = ({sortWindow, onSubmit, initialValues, openCloseSortWindow}) => {
  return(
      <>
      {sortWindow && (
        <OutsideClickHandler
          disabled={!sortWindow}
          onOutsideClick={() => openCloseSortWindow()}>
        <S.Sorting>
          <Form
            onSubmit={onSubmit}
            initialValues={{ sort: initialValues }}
            render={({ handleSubmit, submitting, pristine }) => (
              <form onSubmit={handleSubmit}>
                <S.Priority>
                  <div>
                    <S.PriorityItem>
                      <Field name="sort" component="input" type="radio" value="All" required />{' '}
                      All
                    </S.PriorityItem>
                    <S.PriorityItem priority={'Low'}>
                      <Field name="sort" component="input" type="radio" value="Low" required />{' '}
                      Low
                    </S.PriorityItem>
                    <S.PriorityItem>
                      <Field
                        name="sort"
                        component="input"
                        type="radio"
                        value="Medium"
                        required
                      />{' '}
                      Medium
                    </S.PriorityItem>
                    <S.PriorityItem>
                      <Field name="sort" component="input" type="radio" value="High" required />{' '}
                      High
                    </S.PriorityItem>
                  </div>
                </S.Priority>
                <div className="buttons">
                  <S.PrioritySubmitButton type="submit" disabled={submitting || pristine}>
                    Sort
                  </S.PrioritySubmitButton>
                </div>
              </form>
            )}
          />
        </S.Sorting>
        </OutsideClickHandler>
      )}
      </>
  )
}

export default PrioritySortForm
