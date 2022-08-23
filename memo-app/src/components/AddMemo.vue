<template>
  <div>
    <button @click="doadd">+</button>
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
      };
      //send to parent
      this.$emit("add-event", newMemo);
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

.buttons {
  margin-top: 1em;
}
</style>
