import { createStore } from 'vuex'
import { v4 as uuidv4 } from 'uuid'

export default createStore({
    state: {
        memos: []
    },
    mutations: {
        save(state, newMemo) {
            newMemo.id = uuidv4()
            state.memos.unshift(newMemo)
      }
  }
});