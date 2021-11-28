import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postAdded } from './postSlice'

export const AddPostForm = () => {
  const [postData, setPostData] = useState({ title: '', content: '', user: '' })

  const dispatch = useDispatch()
  const users = useSelector((state) => state.users)

  const onPostDataChanged = (e) =>
    setPostData({ ...postData, [e.target.name]: e.target.value })

  const onSavePostClicked = () => {
    dispatch(postAdded(postData.title, postData.content, postData.user))
    setPostData({ title: '', content: '', user: '' })
  }

  const canSave =
    Boolean(postData.title) &&
    Boolean(postData.user) &&
    Boolean(postData.content)

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ))

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
        <label htmlFor="postAuthor">Author:</label>
        <select
          id="postAuthor"
          name="user"
          value={postData.user}
          onChange={onPostDataChanged}
        >
          <option value=""></option>
          {usersOptions}
        </select>
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="content"
          value={postData.content}
          onChange={onPostDataChanged}
        />
        <button type="button" onClick={onSavePostClicked} disabled={!canSave}>
          Save Post
        </button>
      </form>
    </section>
  )
}
