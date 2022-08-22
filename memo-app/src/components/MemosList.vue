<template>
  <div>
    <div v-bind:key="memo_item.id" v-for="memo_item in memo_items">
      <MemoItem v-bind:memo_item="memo_item"></MemoItem>
    </div>
  </div>

  <div>
    <memo_items />
  </div>
</template>

<script>
import MemoItem from "./MemoItem.vue";
export default {
  name: "MemosList",
  props: ["memo_items"],
  components: {
    MemoItem,
  },
};
</script>

<style scoped></style>
