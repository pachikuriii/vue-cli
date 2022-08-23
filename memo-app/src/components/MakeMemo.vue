<template>
  <div>
    <button @click="doadd">新規作成</button>
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
    doadd() {
      const newMemo = {
        content: "新規メモ",
        id: uuidv4(),
        editing: false,
      };
      //send to parent
      this.$emit("make-memo-event", newMemo);
    },
  },
};
</script>
