import { useSelector } from 'react-redux'

export const PostAuthor = ({ userId }) => {
  const postAuthor = useSelector((state) =>
    state.users.find((user) => user.id === userId)
  )

  return <span>by {postAuthor ? postAuthor.name : 'Unknown author'}</span>
}
