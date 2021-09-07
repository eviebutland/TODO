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
  filterByCompleted(){
    // filter by completed tasks
  },
  getSingleItem(state, id){
    return state.todos.filter(todo => todo.id === id)
  }
}