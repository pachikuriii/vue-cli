<template>
  <div>
    <div v-bind:key="memo_item.id" v-for="memo_item in memo_items">
      <MemoItem
        v-bind:memo_item="memo_item"
        @catchMessage="editMemoMethod"
      ></MemoItem>
    </div>
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
  methods: {
    editMemoMethod(memo_item) {
      this.$emit("catchMessage", memo_item);
    },
  },
};
</script>

<style scoped></style>
