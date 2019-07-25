import React from 'react'
import PrioritySortForm from './PrioritySortForm'
import row from 'assets/two-rows-and-three-columns-layout.svg'
import column from 'assets/three-rows-layout-content-structure-design.svg'
import ReactSVG from 'react-svg'
import * as S from './styles'

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
