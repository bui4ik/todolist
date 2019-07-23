import React from 'react'
import * as S from './styles'
import { Field, Form } from 'react-final-form'

const SectionTitle = ({
  text,
  showView,
  count,
  openCloseSortWindow,
  sortWindow,
  sortActiveTasks,
  initialValues,
}) => {
  const onSubmit = value => {
    sortActiveTasks(value.sort)
  }

  return (
    <S.Container>
      <S.Title>{text}</S.Title>
      <S.TasksCount>({count})</S.TasksCount>
      {showView ? (
        <S.SortingContainer>
          <S.TasksDisplayType onClick={openCloseSortWindow}>Show {initialValues} ⯆</S.TasksDisplayType>
          {sortWindow ? (
            <S.Sorting>
              <Form
                onSubmit={onSubmit}
                initialValues={{sort: initialValues}}
                render={({ handleSubmit, submitting, pristine }) => (
                  <form onSubmit={handleSubmit}>
                    <S.Priority>
                      <div>
                        <S.PriorityItem>
                          <Field name="sort" component="input" type="radio" value="All" required />{' '}
                          All
                        </S.PriorityItem>
                        <S.PriorityItem>
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
                      <button type="submit" disabled={submitting || pristine}>
                        Sort
                      </button>
                    </div>
                  </form>
                )}
              />
            </S.Sorting>
          ) : null}
        </S.SortingContainer>
      ) : null}
    </S.Container>
  )
}

export default SectionTitle
