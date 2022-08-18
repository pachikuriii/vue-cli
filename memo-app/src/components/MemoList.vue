<template>
  <div class="memo_list">
    <ul>
      <li v-for="memo in memos" :key="memo.id">
        {{ memo.content.split("\n")[0] }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MemoList",
  computed: {
    memos() {
      return this.$store.state.memos;
    },
  },
};
</script>

<style scoped>
ul {
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
