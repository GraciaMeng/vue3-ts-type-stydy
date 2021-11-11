import { State } from "../index";
import { Todo } from "../../types";
import { Module } from "vuex";
import http from "../../api/request";

const initialState = {
  todos: [] as Todo[],
};

export type TodoState = typeof initialState;

// S是子模块的state，R是根模块的state
// export default {} as Module<S, R>;
export default {
  namespaced: true,
  state: initialState,
  mutations: {
    initTodo(state, payload: Todo[]) {
      state.todos = payload;
    },
    addTodo(state, payload: Todo) {
      state.todos.push(payload);
    },
  },
  actions: {
    initTodo({ commit }) {
      http.get<Todo>("/todos/1").then((res) => {
        commit("addTodo", res.data);
      });
      // setTimeout(() => {
      //   commit("initTodo", [
      //     {
      //       id: 1,
      //       name: "vue3+ts",
      //       completed: false,
      //     },
      //   ]);
      // }, 1000);
    },
    addTodo({ commit, state }, payload: string) {
      commit("addTodo", {
        id: state.todos.length + 1,
        title: payload,
        completed: true,
      } as Todo);
    },
  },
} as Module<TodoState, State>;
