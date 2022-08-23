<template>
  <div>
    <textarea
      v-model="this.content"
      type="text"
      ref="comment"
      rows="4"
      cols="40"
    ></textarea>
    <button @click="doedit" class="button button-new">編集</button>
    <button @click="dodelete" class="button button-new">削除</button>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
export default {
  name: "EditMemo",
  data() {
    return {
      content: "",
    };
  },
  methods: {
    doedit(e) {
      e.preventDefault();
      const newMemo = {
        content: this.content,
        id: uuidv4(),
        editing: false,
      };
      //send to parent
      this.$emit("edit-memo-event", newMemo);
      //clear the field
      this.content = "";
    },
    dodelete(e) {
      e.preventDefault();
      const newMemo = {
        content: this.content,
        id: uuidv4(),
        editing: false,
      };
      //send to parent
      this.$emit("delete-memo-event", newMemo);
      //clear the field
      this.content = "";
    },
  },
};
</script>
