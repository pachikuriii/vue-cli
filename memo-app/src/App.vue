<template>
  <div>
    <MemosList v-bind:memo_items="memo_items" />
  </div>
</template>

<script>
import MemosList from "./components/MemosList.vue";
export default {
  name: "App",
  components: {
    MemosList,
  },
  data() {
    return {
      memo_items: [
        {
          id: 0,
          title: "First Title",
        },
        {
          id: 1,
          title: "Second title",
        },
        {
          id: 2,
          title: "Third title",
        },
        {
          id: 3,
          title: "Fourth title",
        },
      ],
    };
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
