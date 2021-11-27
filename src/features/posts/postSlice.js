import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = [
  { id: '1', title: 'First Post!', content: 'Hello!' },
  { id: '2', title: 'Second Post', content: 'More text' },
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        return [...state, action.payload]
      },
      prepare(title, content) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
          },
        }
      },
    },

    postUpdated: (state, { payload }) => {
      return state.map((post) =>
        post.id === payload.id
          ? { id: payload.id, title: payload.title, content: payload.content }
          : post
      )
    },
  },
})

export const { postAdded, postUpdated } = postsSlice.actions
export default postsSlice.reducer
