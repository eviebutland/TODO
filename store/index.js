export const state = () => ({
  todos: [],
  description: '' // this should eventually make a new item in todo list, and be cleared
})

export const mutations = {
  addNewTodoItem(state, value){
    state.todos.push(value)
  },
  updateDescription(state, value){
    console.log('value', value)
    state.description = value
    console.log('state', state)
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