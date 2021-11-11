import { createStore, Store } from "vuex";
import { InjectionKey } from "vue";
import todos, { TodoState } from "./module/todos";

// 创建一个injectionKey
export const key: InjectionKey<Store<State>> = Symbol();

export type State = {
  counter: number;
  todos?: TodoState;
};
export default createStore({
  state: {
    counter: 0,
  },
  mutations: {
    add(state): void {
      state.counter++;
    },
  },
  modules: {
    todos,
  },
});
