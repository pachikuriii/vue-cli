<template>
  <div id="app">
    <h1>Memo</h1>
    <MemoList v-bind:memo_items="memo_items" @editMemo="editMemo" />
    <div>
      <div v-if="!this.editing"></div>
      <div v-else>
        <EditMemo
          v-bind:memo_content="memo_content"
          @delete-event="deleteMemo"
          @doneedit-event="doneEditMemo"
        />
      </div>
    </div>
    <AddMemo @add-event="addMemo" />
  </div>
</template>

<script>
import MemoList from "./components/MemoList.vue";
import EditMemo from "./components/EditMemo.vue";
import AddMemo from "./components/AddMemo.vue";
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
    EditMemo,
    AddMemo,
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
      const edititem = this.memo_items.find((v) => v.id === this.memo_id);
      const index = this.memo_items.indexOf(edititem);
      this.memo_items[index].content = content;
      todoStorage.save(this.memo_items);
      this.editing = false;
    },
    deleteMemo() {
      const deleteitem = this.memo_items.find((v) => v.id === this.memo_id);
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
  color: #698aab;
  margin-top: 60px;
}
</style>
