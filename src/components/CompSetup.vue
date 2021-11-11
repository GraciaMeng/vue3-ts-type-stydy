<template>
  <!-- 标题 -->
  <h1 :style="{ backgroundColor: titleInfo.color }">{{ titleInfo.value }}</h1>
  <div @click="$store.commit('add')">store:{{ counter }}</div>
  <div>{{ count }}</div>
  <div>{{ doubleCount }}</div>

  <!-- 待办事项列表 -->
  <div v-for="item in items" :key="item.id">
    {{ item.title }}
  </div>
  <h2 :style="{ backgroundColor: titleInfo.color }">todos</h2>
  <div v-for="item in todos" :key="item.id">
    {{ item.title }}
  </div>
</template>

<script setup lang="ts">
import { computed, ref, defineProps } from "vue";
import type { PropType } from "vue";
import type { Todo, TitleInfo } from "../types";
import { useStore } from "vuex";
import { key } from "../store";
// 属性声明
defineProps({
  titleInfo: {
    // props的类型定义
    type: Object as PropType<TitleInfo>,
    required: true,
  },
});
const store = useStore(key);
const counter = computed(() => store.state.counter * 2);
const doubleCount = computed(() => count.value * 2);

const count = ref(1);

const items = ref<Todo[]>([]);
// items.value.push({
//   id: 1,
//   name: "vue3",
//   completed: true,
// });

// 从vuex中初始化
const todos = computed(() => store.state.todos?.todos);
</script>

<style scoped></style>
