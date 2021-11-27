import { useState } from 'react'

export const AddPostForm = () => {
  const [postData, setPostData] = useState({title: '', content: ''})
  const onPostDataChanged = e => setPostData({...postData, [e.target.name]: e.target.value});

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
        <button type="button">Save Post</button>
      </form>
    </section>
  )
}
