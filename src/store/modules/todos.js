import axios from "axios";

const state = {
    todos: []
};

const getters = {
    allTodos: state => state.todos
};

const actions = {
    async getAllTodo({ commit }) {
        await axios
            .get('http://localhost:8000/todo/all')
            .then((response) => {
                commit('setTodos', response.data.data)
                // this.datas = response.data.data
            })
    },

    async addTodo({ commit }, formData) {
        await axios
            .post('http://localhost:8000/todo', formData)
            .then((response) => {
                commit('newTodo', response.data.data)
            })
    },

    async updateTodo({ commit }, [event, stage]) {
        let id = event.item.getAttribute('data-id');
        await axios
        .put(`http://localhost:8000/todo/${id}`, {
            status: stage
        })
        .then((response) => {
            commit('updateTodo', response.data.data)
        })
    },

    async deleteTodo({ commit }, id) {
        await axios
            .delete(`http://localhost:8000/todo/${id}`)
            .then(() => {
                commit('removeTodo', id)
            })
    }
};

const mutations = {
    setTodos: (state, todos) => (state.todos = todos),
    newTodo: (state, todo) => state.todos.push(todo),
    removeTodo: (state, id) => state.todos = state.todos.filter(todo => todo._id != id),
    updateTodo: (state, newTodo) => state.todos = state.todos.map( (todo) => todo._id === newTodo._id ? newTodo : todo )
};

export default{
    state,
    getters,
    actions,
    mutations
}