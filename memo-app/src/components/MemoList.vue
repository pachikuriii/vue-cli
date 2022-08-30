<template>
  <div>
    <div :key="memo_item.id" v-for="memo_item in memo_items">
      <MemoListItem
        :memo_item="memo_item"
        @editMemo="editMemoMethod"
      ></MemoListItem>
    </div>
  </div>
</template>

<script>
import MemoListItem from "./MemoListItem.vue";
export default {
  name: "MemoList",
  props: ["memo_items"],
  components: {
    MemoListItem,
  },
  methods: {
    editMemoMethod(memo_item) {
      this.$emit("editMemo", memo_item);
    },
  },
};
</script>

<style scoped></style>
