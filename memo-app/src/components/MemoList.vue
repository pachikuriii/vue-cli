<template>
  <div>
    <div v-bind:key="memo_item.id" v-for="memo_item in memo_items">
      <MemoItem
        v-bind:memo_item="memo_item"
        @editMemo="editMemoMethod"
      ></MemoItem>
    </div>
  </div>
</template>

<script>
import MemoItem from "./MemoItem.vue";
export default {
  name: "MemoList",
  props: ["memo_items"],
  components: {
    MemoItem,
  },
  methods: {
    editMemoMethod(memo_item) {
      this.$emit("editMemo", memo_item);
    },
  },
};
</script>

<style scoped></style>
