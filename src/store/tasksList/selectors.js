export const initialState = {
  tasks: [
    {
      id: 1,
      name: 'Clean the room',
      description: 'mother said to clean the room',
      creationDate: '15 Feb 2018 13:30',
      isCompleted: false,
    },
    {
      id: 2,
      name: 'Learn JS',
      description: 'Learn vanilla JS on CodeAcademy',
      creationDate: '16 Dec 2018 15:00',
      isCompleted: false,
    },
    {
      id: 3,
      name: 'Learn React',
      description: 'Learn React from documentation',
      creationDate: '01 Jan 2018 09:30',
      isCompleted: false,
    },
    {
      id: 4,
      name: 'Learn Css',
      description: 'Learn how to use CSS Grid',
      creationDate: '01 Jan 2018 09:30',
      isCompleted: true,
    },
    {
      id: 5,
      name: 'Learn Css',
      description: 'Learn how to use CSS Grid',
      creationDate: '01 Jan 2018 09:30',
      isCompleted: true,
    },
    {
      id: 6,
      name: 'Learn Css',
      description: 'Learn how to use CSS Grid',
      creationDate: '01 Jan 2018 09:30',
      isCompleted: true,
    }
  ],
  isLoading: false,
  error: '',
}

export const tasksSelector = ({ tasksList }) => tasksList.tasks
export const isLoadingsSelector = ({ tasksList }) => tasksList.isLoading
export const errorSelector = ({ tasksList }) => tasksList.error
