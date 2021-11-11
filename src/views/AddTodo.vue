<template>
  <div>
    <!-- 新增待办 -->
    <input type="text" v-model="todoName" @keydown.enter="addTodo()" />
  </div>
</template>

<script setup lang="ts">
import { key } from "../store";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const store = useStore(key);
const router = useRouter();
const todoName = ref("");
const addTodo = (): void => {
  store.dispatch("todos/addTodo", todoName.value);
  todoName.value = "";
  // 跳转列表页
  router.push("/");
};
</script>

<style scoped></style>
