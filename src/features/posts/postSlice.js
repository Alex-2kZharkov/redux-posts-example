import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = [
  {
    id: '1',
    createdAt: new Date('2021-11-11').toISOString(),
    title: 'First Post!',
    content: 'Hello!',
    user: '0',
    reactions: {
      thumbsUp: 0,
      hooray: 0,
      heart: 0,
      rocket: 0,
      eyes: 0,
    },
  },
  {
    id: '2',
    createdAt: new Date().toISOString(),
    title: 'Second Post',
    content: 'More text',
    user: '0',
    reactions: {
      thumbsUp: 0,
      hooray: 0,
      heart: 0,
      rocket: 0,
      eyes: 0,
    },
  },
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
            createdAt: new Date().toISOString(),
            title,
            content,
            user: userId,
            reactions: {
              thumbsUp: 0,
              hooray: 0,
              heart: 0,
              rocket: 0,
              eyes: 0,
            },
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
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload
      const targetPost = state.find((post) => post.id === postId)
      if (targetPost) {
        targetPost.reactions[reaction]++
      }
    },
  },
})

export const { postAdded, postUpdated, reactionAdded } = postsSlice.actions
export default postsSlice.reducer
