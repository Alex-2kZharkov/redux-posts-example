import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = [
  { id: '1', title: 'First Post!', content: 'Hello!', user: '0' },
  { id: '2', title: 'Second Post', content: 'More text', user: '0' },
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        return [...state, action.payload]
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            user: userId
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
