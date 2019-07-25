import React from 'react'
import * as S from './styles'
import PrioritySortForm from './PrioritySortForm'
import ReactSVG from 'react-svg'
import row from './two-rows-and-three-columns-layout.svg'
import column from './three-rows-layout-content-structure-design.svg'

const SectionTitle = ({
  text,
  showView,
  count,
  openCloseSortWindow,
  sortWindow,
  sortActiveTasks,
  initialValues,
  setDateSortType,
  dateSortType,
  setViewType,
}) => {
  const onSubmit = value => {
    sortActiveTasks(value.sort)
    openCloseSortWindow()
  }
  return (
    <S.Container>
      <S.Title>{text}</S.Title>
      <S.TasksCount>({count})</S.TasksCount>
      {showView && (
        <S.SortingContainer>
          <S.ViewButton onClick={() => setViewType('row')}>
            <ReactSVG src={row} />
          </S.ViewButton>
          <S.ViewButton onClick={() => setViewType('column')}>
            <ReactSVG src={column} />
          </S.ViewButton>
          <S.SortByDateButton onClick={setDateSortType}>
            Sort By Date {dateSortType === 'ASC' ? '▼' : '▲'}
          </S.SortByDateButton>
          <S.TasksDisplayTypeContainer>
            <S.TasksDisplayTypeButton onClick={openCloseSortWindow}>
              Show {initialValues} ⌵
            </S.TasksDisplayTypeButton>
            <PrioritySortForm
              initialValues={initialValues}
              onSubmit={onSubmit}
              sortWindow={sortWindow}
              openCloseSortWindow={openCloseSortWindow}
            />
          </S.TasksDisplayTypeContainer>
        </S.SortingContainer>
      )}
    </S.Container>
  )
}

export default SectionTitle
