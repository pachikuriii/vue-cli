<template>
  <div @click="edit">
    <p>{{ firstLine }}</p>
  </div>
</template>

<script>
export default {
  name: "MemoListItem",
  props: ["memoItem"],
  computed: {
    firstLine: function () {
      return this.memoItem.content.split("\n")[0];
    },
  },
  methods: {
    edit() {
      this.$emit("editMemo", this.memoItem);
    },
  },
};
</script>

<style scoped></style>
