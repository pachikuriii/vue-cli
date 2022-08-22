<template>
  <div>
    <p>{{ memo_item.content }}</p>
  </div>
</template>

<script>
export default {
  name: "MemoItem",
  props: ["memo_item"],
};
</script>

<style scoped></style>
