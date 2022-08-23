<template>
  <div>
    <textarea v-model="content" type="text" rows="4" cols="40"></textarea>
    <button @click="doedit">編集</button>
    <button @click="dodelete">削除</button>
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
      this.$emit("doneedit-memo-event", this.content);
      this.content = "";
    },
    dodelete() {
      this.$emit("delete-memo-event");
    },
  },
};
</script>
