<template>
  <!-- 标题 -->
  <h1 :style="{ backgroundColor: titleInfo.color }">{{ titleInfo.value }}</h1>
  <div>{{ count }}</div>
  <div>store:{{ $store.state.counter }}</div>
  <div>{{ doubleCount }}</div>
  <!-- 新增待办 -->
  <input
    type="text"
    v-model="todoName"
    @keydown.enter="addTodo(newTodo(todoName))"
  />
  <!-- 待办事项列表 -->
  <div v-for="item in items" :key="item.id">
    {{ item.title }}
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import type { Todo, TitleInfo } from "../types";

export default defineComponent({
  props: {
    titleInfo: {
      // props的类型定义
      type: Object as PropType<TitleInfo>,
      required: true,
    },
  },
  data() {
    return {
      count: 1,
      // data类型定义
      items: [] as Todo[],
      todoName: "",
    };
  },
  created() {
    this.items.push({
      id: 1,
      title: "vue3",
      completed: true,
    });
  },
  computed: {
    doubleCount(): number {
      return this.$store.state.counter * 2;
      // return this.count * 2;
    },
  },
  methods: {
    newTodo(todoName: string): Todo {
      return {
        id: this.items.length + 1,
        title: todoName,
        completed: true,
      };
    },
    addTodo(todo: Todo): void {
      this.items.push(todo);
      this.todoName = "";
    },
  },
});
</script>

<style scoped></style>
