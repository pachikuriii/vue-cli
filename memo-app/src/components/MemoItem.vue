<template>
  <div @click="doedit">
    <p>{{ memo_item.content }}</p>
  </div>
</template>

<script>
export default {
  name: "MemoItem",
  props: ["memo_item"],
  methods: {
    doedit() {
      this.$emit("catchMessage", this.memo_item);
    },
  },
};
</script>

<style scoped></style>
