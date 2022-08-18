<template>
  <div class="memo_form">
    <textarea
      v-model="content"
      type="text"
      ref="comment"
      rows="4"
      cols="40"
    ></textarea>
    <button @click="save" class="button button-new">追加</button>
  </div>
</template>

<script>
export default {
  name: "MemoForm",
  data() {
    return {
      content: "",
    };
  },
  methods: {
    save() {
      const memo = {
        content: this.content,
      };
      this.$store.commit("save", memo);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
