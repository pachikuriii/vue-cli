<template>
  <div>
    <button v-on:click="add">+</button>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
export default {
  name: "MemoNewButton",
  methods: {
    add() {
      const newMemo = {
        content: "",
        id: uuidv4(),
      };
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
