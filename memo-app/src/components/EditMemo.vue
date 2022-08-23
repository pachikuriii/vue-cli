<template>
  <div class="form-wrapper">
    <textarea v-model="content" type="text" rows="10" cols="40"></textarea>
    <div class="buttons">
      <button @click="doedit">編集</button>
      <button @click="dodelete">削除</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditMemo",
  props: ["memo_content"],
  data() {
    return {
      content: this.memo_content,
    };
  },
  methods: {
    doedit() {
      this.$emit("doneedit-event", this.content);
      this.content = "";
    },
    dodelete() {
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
