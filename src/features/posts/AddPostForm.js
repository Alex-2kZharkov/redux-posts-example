import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { postAdded } from './postSlice'

export const AddPostForm = () => {
  const [postData, setPostData] = useState({ title: '', content: '' })
  const onPostDataChanged = (e) =>
    setPostData({ ...postData, [e.target.name]: e.target.value })

  const dispatch = useDispatch()

  const onSavePostClicked = () => {
    if (postData.title && postData.content) {
      dispatch(postAdded(postData.title, postData.content))
    }
    setPostData({ title: '', content: '' })
  }
  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="title"
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
        <button type="button" onClick={onSavePostClicked}>
          Save Post
        </button>
      </form>
    </section>
  )
}
