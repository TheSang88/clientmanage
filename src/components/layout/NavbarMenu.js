import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import { useContext } from 'react'


const NavbarMenu = () => {
	const {
		authState: {
			user: { username }
		},
		logoutUser
	} = useContext(AuthContext)

	const logout = () => logoutUser()

	return (

		<Navbar expand='lg' bg='primary' variant='dark' className='shadow'>

			<Navbar.Brand className='font-weight-bolder text-white'>
				<i class="fa-solid fa-cubes fa-2xl me-2 ms-2"></i>
				MANAGE
			</Navbar.Brand>
			<Nav className='mr-auto'>
				<Nav.Link
					className='font-weight-bolder text-white'
					to='/dashboard'
					as={Link}
				>
					Dashboard
				</Nav.Link>
				<Nav.Link
					className='font-weight-bolder text-white'
					to='/about'
					as={Link}
				>
					About
				</Nav.Link>
			</Nav>

			<Nav className='ms-auto p-1 fs-5 w-25'>
				<NavDropdown title={username} className='ms-auto me-auto'>
					<NavDropdown.Item>
						<Button
							variant='secondary'
							className='font-weight-bolder text-white'
							onClick={logout}
						>
							Logout
							<i class="fa-solid fa-right-from-bracket fa-2xl ms-2"></i>
						</Button>
					</NavDropdown.Item>
					<NavDropdown.Item>
						Doior
					</NavDropdown.Item>
				</NavDropdown>
			</Nav>



		</Navbar>
	)
}

export default NavbarMenu