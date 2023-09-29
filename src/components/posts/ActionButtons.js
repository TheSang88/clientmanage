import Button from 'react-bootstrap/Button'
import { PostContext } from '../../contexts/PostContext'
import { useContext } from 'react'

const ActionButtons = ({ url, _id }) => {
	const { deletePost, findPost, setShowUpdatePostModal } = useContext(
		PostContext
	)

	const choosePost = postId => {
		findPost(postId)
		setShowUpdatePostModal(true)
	}

	return (
		<div>
			<Button className='post-button me-2' href={url} target='_blank'>
				<i className="fa-sharp fa-solid fa-link fa-sm"></i>
			</Button>
			<Button className='post-button me-2' onClick={choosePost.bind(this, _id)}>
				<i className="fa-solid fa-pen fa-sm"></i>
			</Button>
			<Button className='post-button me-2' onClick={deletePost.bind(this, _id)}>
				<i className="fa-solid fa-trash fa-sm"></i>
			</Button>
		</div>
	)
}

export default ActionButtons
