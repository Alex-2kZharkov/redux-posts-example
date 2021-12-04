import { useDispatch } from 'react-redux'
import { reactionAdded } from './postSlice'

const reactionEmoji = {
  thumbsUp: '👍',
  hooray: '🎉',
  heart: '❤️',
  rocket: '🚀',
  eyes: '👀',
}

export const ReactionButtons = ({ post }) => {
  const dispatch = useDispatch()
  const onReactionChanged = (e) =>
    dispatch(reactionAdded({ postId: post.id, reaction: e.target.name }))

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type="button"
        className="muted-button reaction-button"
        name={name}
        onClick={onReactionChanged}
      >
        {emoji} {post.reactions[name]}
      </button>
    )
  })
  return <div>{reactionButtons}</div>
}
