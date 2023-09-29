import Alert from 'react-bootstrap/Alert'

const AlertMessage = ({ info }) => {
	return info === null ? null : (

		<Alert.Heading className='alert bg-light text-danger border-0 fs-6 p-0 mt-2 position-absolute' variant={info.type}>{info.message}</Alert.Heading>
	)
}

export default AlertMessage
