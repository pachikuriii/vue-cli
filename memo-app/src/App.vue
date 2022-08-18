<template>
  <MemoList />
  <MemoForm />
</template>

<script>
import MemoList from "./components/MemoList.vue";
import MemoForm from "./components/MemoForm.vue";

export default {
  name: "App",
  components: {
    MemoList,
    MemoForm,
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
