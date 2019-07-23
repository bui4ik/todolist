export const initialState = {
  tasks: [
    {
      id: 1,
      name: 'Clean the room',
      description: 'mother said to clean the room',
      creationDate: 1563794051983,
      isCompleted: false,
      priority: 'High',
    },
    {
      id: 2,
      name: 'Learn JS',
      description: 'Learn vanilla JS on CodeAcademy',
      creationDate: 1563734451983,
      isCompleted: false,
      priority: 'Medium',
    },
    {
      id: 3,
      name: 'Learn React',
      description: 'Learn React from documentation',
      creationDate: 1563494451983,
      isCompleted: false,
      priority: 'Low',
    },
    {
      id: 4,
      name: 'Learn Css',
      description: 'Learn how to use CSS Grid',
      creationDate: 1563793451983,
      isCompleted: true,
      priority: 'High',
    },
    {
      id: 5,
      name: 'Learn Css',
      description: 'Learn how to use CSS Grid',
      creationDate: 1563792451983,
      isCompleted: true,
      priority: 'High',
    },
    {
      id: 6,
      name: 'Learn Css',
      description: 'Learn how to use CSS Grid',
      creationDate: 1563794411983,
      isCompleted: true,
      priority: 'High',
    },
  ],
  isLoading: false,
  error: '',
}

export const tasksSelector = ({ tasksList }) => tasksList.tasks

export const lowPriorityTasksSelector = ({ tasksList }) =>
  tasksList.tasks.filter(task => task.priority === 'Low' && !task.isCompleted)

export const mediumPriorityTasksSelector = ({ tasksList }) =>
  tasksList.tasks.filter(task => task.priority === 'Medium' && !task.isCompleted)

export const highPriorityTasksSelector = ({ tasksList }) =>
  tasksList.tasks.filter(task => task.priority === 'High' && !task.isCompleted)

export const sortedByDateTasksAscendingSelector = ({ tasksList }) =>
  tasksList.tasks.sort((a,b) => a.creationDate - b.creationDate)

export const sortedByDateTasksDescendingSelector = ({ tasksList }) =>
  tasksList.tasks.sort((a,b) => b.creationDate - a.creationDate)

export const isLoadingsSelector = ({ tasksList }) => tasksList.isLoading
export const errorSelector = ({ tasksList }) => tasksList.error
