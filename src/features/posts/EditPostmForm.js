import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { postUpdated } from './postSlice'


export const EditPostForm = () => {
  const { postId } = useParams()
  const dispatch = useDispatch()
  const history = useHistory()

  const { title, content } = useSelector((state) =>
    state.posts.find((post) => post.id === postId)
  )
  const [postData, setPostData] = useState({ title, content })

  const onPostDataChanged = (e) =>
    setPostData({ ...postData, [e.target.name]: e.target.value })

  const onSavePostClicked = () => {
    const { title, content } = postData
    if (title && content) {
      dispatch(postUpdated({ id: postId, title, content }))
      history.push(`/posts/${postId}`)
    }
  }

  return (
    <section>
      <h2>Edit Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="title"
          placeholder="What's on your mind?"
          value={postData.title}
          onChange={onPostDataChanged}
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="content"
          value={postData.content}
          onChange={onPostDataChanged}
        />
      </form>
      <button type="button" onClick={onSavePostClicked}>
        Save Post
      </button>
    </section>
  )
}
