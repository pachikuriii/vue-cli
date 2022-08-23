<template>
  <div id="app">
    <h1>My Memo</h1>
    <MemosList v-bind:memo_items="memo_items" @catchMessage="editMemoMethod" />
    <div>
      <div v-if="!this.edit"></div>
      <div v-else>
        <EditMemo
          @edit-memo-event="editMemoMethod"
          @delete-memo-event="deleteMemoMethod"
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
      edit: false,
    };
  },
  mounted: function () {
    JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  },

  methods: {
    addMemoMethod(newMemo) {
      this.memo_items.push(newMemo);
      todoStorage.save(this.memo_items);
    },
    makeMemoMethod(newMemo) {
      this.memo_items.push(newMemo);
      todoStorage.save(this.memo_items);
    },
    editMemoMethod(memo_item) {
      memo_item.editing = true;
      this.edit = true;
    },
    doneEditMemoMethod() {
      this.edit = false;
      todoStorage.save(this.todos);
    },
    deleteMemoMethod(memo_item) {
      const index = this.memo_items.indexOf(memo_item);
      const check = confirm("本当に削除しますか？");
      if (check === true) {
        this.memo_items.splice(index, 1);
      }
      todoStorage.save(this.memo_items);
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
