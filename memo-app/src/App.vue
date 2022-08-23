<template>
  <div id="app">
    <h1>My Memo</h1>
    <MemosList v-bind:memo_items="memo_items" @catchMessage="editMemoMethod" />
    <div>
      <div v-if="!this.editing"></div>
      <div v-else>
        <EditMemo
          v-model="this.memo_item"
          @delete-memo-event="deleteMemoMethod"
          @doneedit-memo-event="doneEditMemoMethod"
        ></EditMemo>
      </div>
    </div>

    <MakeMemo v-on:make-memo-event="makeMemoMethod" />
  </div>
</template>

<script>
import MemosList from "./components/MemosList.vue";
import EditMemo from "./components/EditMemo.vue";
import MakeMemo from "./components/MakeMemo.vue";
const STORAGE_KEY = "vue-memo";
const todoStorage = {
  fetch: function () {
    const todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    return todos;
  },
  save: function (todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  },
};

export default {
  name: "App",
  components: {
    MemosList,
    EditMemo,
    MakeMemo,
  },
  data() {
    return {
      memo_items: [],
      editing: false,
      editing_id: "",
      memo_item: "",
    };
  },
  mounted: function () {
    JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  },

  methods: {
    makeMemoMethod(newMemo) {
      this.memo_items.push(newMemo);
      todoStorage.save(this.memo_items);
    },
    editMemoMethod(memo_item) {
      this.memo_item = memo_item.content;
      this.editing_id = memo_item.id;
      this.editing = true;
    },
    doneEditMemoMethod(content, memo_item) {
      this.memo_item = content;
      console.log(content);
      const index = this.memo_items.indexOf(memo_item);
      this.memo_items[index].content = this.memo_item;

      todoStorage.save(this.memo_items);
      this.editing = false;
    },
    deleteMemoMethod() {
      const deleteitem = this.memo_items.find((v) => v.id === this.editing_id);
      const index = this.memo_items.indexOf(deleteitem);
      const check = confirm("本当に削除しますか？");
      if (check === true) {
        this.memo_items.splice(index, 1);
      }
      todoStorage.save(this.memo_items);
      this.editing = false;
      this.editing_id = "";
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
