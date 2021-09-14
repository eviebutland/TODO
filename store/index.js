export const state = () => ({
  todos: []
})

export const mutations = {
  addNewTodoItem(state, value){
    state.todos.push(value)
  }
}

export const actions = {
  getAllTodos(){
    // retrieve todos from api
    // dispatch to mutations
  },
  updateTodos(){
    // dispatch changes to mutations
  }
}
export const getters = {
  numberOfTodos(state) {
    return state.todos.length
  },
  getSingleItem(state){
    return (id) => {
      return state.todos.find(todo => todo.id == id)
    }
  },
  filterByCategory(state, category) {
    switch(category) {
      case 'quick-task':
        return state.todos.filter(todo => todo.category === 'quick-task')
      case 'task': 
        return state.todos.filter(todo => todo.category === 'task')
      case 'project':
        return state.todos.filter(todo => todo.category === 'project')
      default:
        return []
    }
  },
  filterByStatus(state, status) {
    switch(status) {
      case 'complete':
        return state.todos.filter(todo => todo.status === 'complete')
      case 'not-complete': 
        return state.todos.filter(todo => todo.status === 'not-complete')
      default:
        return []
    }
  },
  filterByGroup(state, group){
    switch(group) {
      case 'work': 
        return state.todos.filter(todo => todo.group === 'work')
      case 'personal':
        return state.todos.filter(todo => todo.group === 'personal')
    }
  }
}