import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import NavbarMenu from '../components/layout/NavbarMenu'
const About = () => {
	return (
		<div>
			<NavbarMenu />
			<Row className='mt-5' style={{ marginRight: 0 }}>
				<Col className='text-center'>
					<Button
						variant='primary'
						href='https://www.facebook.com/profile.php?id=100004873035772'
						size='lg'
					>
						FACEBOOK
					</Button>
				</Col>
			</Row>
		</div>
	)
}

export default About
