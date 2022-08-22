<template>
  <div id="app">
    <h1>My Memo</h1>
    <MemosList v-bind:memo_items="memo_items" />
    <AddMemo v-on:add-memo-event="addMemoMethod"></AddMemo>
  </div>
</template>

<script>
import MemosList from "./components/MemosList.vue";
import AddMemo from "./components/AddMemo.vue";
const STORAGE_KEY = "vue-memo";
const todoStorage = {
  fetch: function () {
    const todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    return todos;
  },
  save: function (todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  },
};

export default {
  name: "App",
  components: {
    MemosList,
    AddMemo,
  },
  data() {
    return {
      memo_items: [],
    };
  },
  mounted: function () {
    JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  },

  methods: {
    addMemoMethod(newMemo) {
      this.memo_items.push(newMemo);
      todoStorage.save(this.memo_items);
    },
  },
  created: function () {
    this.memo_items = todoStorage.fetch();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #698aab;
  margin-top: 60px;
}
</style>
