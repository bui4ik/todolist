export const initialState = {
  tasks: [
    {
      id: 1,
      name: 'Clean the room',
      description: 'mother said to clean the room',
      creationDate: 1563794051983,
      isCompleted: false,
      priority: 'High',
      badgeColor: '#ba68c8',
    },
    {
      id: 2,
      name: 'Learn JS',
      description: 'Learn vanilla JS on CodeAcademy',
      creationDate: 1563734451983,
      isCompleted: false,
      priority: 'Medium',
      badgeColor: '#ba68c8',
    },
    {
      id: 3,
      name: 'Learn React',
      description: 'Learn React from documentation',
      creationDate: 1563494451983,
      isCompleted: false,
      priority: 'Low',
      badgeColor: '#ba68c8',
    },
    {
      id: 4,
      name: 'Learn Css',
      description: 'Learn how to use CSS Grid',
      creationDate: 1563793451983,
      isCompleted: true,
      priority: 'High',
      badgeColor: '#ba68c8',
    },
    {
      id: 5,
      name: 'Learn Css',
      description: 'Learn how to use CSS Grid',
      creationDate: 1563792451983,
      isCompleted: true,
      priority: 'High',
      badgeColor: '#ba68c8',
    },
    {
      id: 6,
      name: 'Learn Css',
      description: 'Learn how to use CSS Grid',
      creationDate: 1563794411983,
      isCompleted: true,
      priority: 'High',
      badgeColor: '#ba68c8',
    },
  ],
  prioritySortType: 'All',
  dateSortType: 'ASC',
  isLoading: false,
  error: '',
  colorScheme: 'light',
  viewType: 'column',
}

export const tasksSelector = ({ tasksList }) => tasksList.tasks

export const viewTypeSelector = ({tasksList}) => tasksList.viewType

export const dateSortType = ({ tasksList }) => tasksList.dateSortType

export const colorSchemeSelector = ({tasksList}) => tasksList.colorScheme

export const sortByDateSelector = ({ tasksList }) =>
  tasksList.tasks.sort((a, b) =>
    tasksList.dateSortType === 'ASC'
      ? a.creationDate - b.creationDate
      : b.creationDate - a.creationDate,
  )

export const prioritySelector = ({ tasksList }) => tasksList.prioritySortType

export const prioritySortSelector = state => {
  const tasks = sortByDateSelector(state)
  const priority = prioritySelector(state)

  switch (priority) {
    case 'All':
      return tasks.filter(task => !task.isCompleted)
    case 'Low':
      return tasks.filter(task => task.priority === 'Low' && !task.isCompleted)
    case 'Medium':
      return tasks.filter(task => task.priority === 'Medium' && !task.isCompleted)
    case 'High':
      return tasks.filter(task => task.priority === 'High' && !task.isCompleted)
    default:
      break
  }
}

export const lowPriorityTasksSelector = ({ tasksList }) =>
  tasksList.tasks.filter(task => task.priority === 'Low' && !task.isCompleted)

export const mediumPriorityTasksSelector = ({ tasksList }) =>
  tasksList.tasks.filter(task => task.priority === 'Medium' && !task.isCompleted)

export const highPriorityTasksSelector = ({ tasksList }) =>
  tasksList.tasks.filter(task => task.priority === 'High' && !task.isCompleted)

export const sortedByDateTasksDescendingSelector = ({ tasksList }) =>
  tasksList.tasks.sort((a, b) => b.creationDate - a.creationDate)

export const isLoadingsSelector = ({ tasksList }) => tasksList.isLoading
export const errorSelector = ({ tasksList }) => tasksList.error
