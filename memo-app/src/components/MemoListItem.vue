<template>
  <div v-on:click="edit">
    <p>{{ firstLine }}</p>
  </div>
</template>

<script>
export default {
  name: "MemoListItem",
  props: ["memo_item"],
  computed: {
    firstLine: function () {
      return this.memo_item.content.split("\n")[0];
    },
  },
  methods: {
    edit() {
      this.$emit("editMemo", this.memo_item);
    },
  },
};
</script>

<style scoped></style>
