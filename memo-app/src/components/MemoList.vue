<template>
  <div>
    <div :key="memo_item.id" v-for="memo_item in memo_items">
      <MemoListItem
        :memoItem="memo_item"
        @editMemo="editMemoMethod"
      ></MemoListItem>
    </div>
  </div>
</template>

<script>
import MemoListItem from "./MemoListItem.vue";
export default {
  name: "MemoList",
  props: ["memoItems"],
  data() {
    return {
      memo_items: this.memoItems,
    };
  },
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
