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
  getSingleItem(state){
    return (id) => {
      return state.todos.find(todo => todo.id == id)
    }
  }
}