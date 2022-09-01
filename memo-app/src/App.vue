<template>
  <div id="app">
    <h1>Memo</h1>
    <div class="memo-wrapper">
      <div class="left">
        <MemoList :memoItems="memo_items" @editMemo="editMemo" />
        <MemoNewButton @add-event="addMemo" />
      </div>

      <div class="right">
        <div v-if="!this.editing"></div>
        <div v-else>
          <MemoForm
            :memoContent="memo_content"
            @delete-event="deleteMemo"
            @doneedit-event="doneEditMemo"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MemoList from "./components/MemoList.vue";
import MemoForm from "./components/MemoForm.vue";
import MemoNewButton from "./components/MemoNewButton.vue";
const STORAGE_KEY = "vue-memo";
const todoStorage = {
  fetch: function () {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  },
  save: function (memos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(memos));
  },
};

export default {
  name: "App",
  components: {
    MemoList,
    MemoForm,
    MemoNewButton,
  },
  data() {
    return {
      memo_items: [],
      editing: false,
      memo_id: "",
      memo_content: "",
    };
  },
  mounted: function () {
    JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  },

  methods: {
    addMemo(newMemo) {
      this.memo_items.push(newMemo);
      todoStorage.save(this.memo_items);
      this.memo_content = newMemo.content;
      this.memo_id = newMemo.id;
      this.editing = true;
    },
    editMemo(memo_item) {
      this.memo_content = memo_item.content;
      this.memo_id = memo_item.id;
      this.editing = true;
    },
    doneEditMemo(content) {
      const edititem = this.memo_items.find(
        (memo_item) => memo_item.id === this.memo_id
      );
      const index = this.memo_items.indexOf(edititem);
      this.memo_items[index].content = content;
      todoStorage.save(this.memo_items);
      this.editing = false;
    },
    deleteMemo() {
      const deleteitem = this.memo_items.find(
        (memo_item) => memo_item.id === this.memo_id
      );
      const index = this.memo_items.indexOf(deleteitem);
      this.memo_items.splice(index, 1);
      todoStorage.save(this.memo_items);
      this.editing = false;
    },
  },
  created: function () {
    this.memo_items = todoStorage.fetch();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #7a4171;
  margin-top: 60px;
}

h1 {
  margin-bottom: 60px;
}
.memo-wrapper {
  display: flex;
  width: 50%;
  margin: auto;
}

.left {
  width: 50%;
}

.right {
  width: 50%;
}
</style>
