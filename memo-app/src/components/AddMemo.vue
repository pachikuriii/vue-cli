<template>
  <div>
    <textarea
      v-model="content"
      type="text"
      ref="comment"
      rows="4"
      cols="40"
    ></textarea>
    <button @click="doadd" class="button button-new">追加</button>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
export default {
  name: "AddMemo",
  data() {
    return {
      content: "",
    };
  },
  methods: {
    doadd(e) {
      e.preventDefault();
      const newMemo = {
        content: this.content,
        id: uuidv4(),
      };
      //send to parent
      this.$emit("add-memo-event", newMemo);
      //clear the field
      this.content = "";
    },
  },
};
</script>
