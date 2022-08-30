<template>
  <div class="form-wrapper">
    <textarea v-model="content" type="text" rows="10" cols="40"></textarea>
    <div class="buttons">
      <button v-on:click="edit">編集</button>
      <button v-on:click="remove">削除</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MemoForm",
  props: ["memo_content"],
  data() {
    return {
      content: this.memo_content,
    };
  },
  methods: {
    edit() {
      this.$emit("doneedit-event", this.content);
      this.content = "";
    },
    remove() {
      this.$emit("delete-event");
    },
  },
};
</script>

<style scoped>
button {
  color: #ffffff;
  background-color: #7a4171;
  border: none;
}
</style>
