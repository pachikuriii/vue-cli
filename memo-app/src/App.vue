<template>
  <div id="app">
    <h1>My Todos List</h1>
    <AddMemo v-on:add-memo-event="addMemoMethod"></AddMemo>
    <MemosList v-bind:memo_items="memo_items" />
  </div>
</template>

<script>
import MemosList from "./components/MemosList.vue";
import AddMemo from "./components/AddMemo.vue";

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
  methods: {
    addMemoMethod(newMemo) {
      this.memo_items.push(newMemo);
      localStorage.setItem("memo_items", JSON.stringify(this.memo_items));
    },
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
