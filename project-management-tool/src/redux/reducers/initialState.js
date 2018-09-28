const initialState = {
  projects: {
    byId: {
      project1: {
        id: 'project1',
        title: 'project1',
        features: ['feature1', 'feature2'],
      },
      project2: {
        id: 'project2',
        title: 'project2',
      },
    },
    allIds: ['project1', 'project2'],
  },
  features: {
    byId: {
      feature1: {
        id: 'feature1',
        title: 'feature1',
        todos: ['todo1', 'todo2'],
      },
      feature2: {
        id: 'feature2',
        title: 'feature2',
      },
    },
    allIds: ['feature1', 'feature2'],
  },
  todos: {
    byId: {
      todo1: {
        id: 'todo1',
        title: 'todo1',
        completed: false,
      },
      todo2: {
        id: 'todo2',
        title: 'todo2',
        completed: false,
      },
    },
    allIds: ['todo1', 'todo2'],
  },
}

export default initialState
