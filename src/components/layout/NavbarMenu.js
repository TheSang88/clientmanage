import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import { useContext } from 'react'

import Container from 'react-bootstrap/Container';

const NavbarMenu = () => {
	const {
		authState: {
			user: { username }
		},
		logoutUser
	} = useContext(AuthContext)

	const logout = () => logoutUser()

	return (
		<Navbar expand="lg" bg="dark" data-bs-theme="dark" className="bg-body-dark">
			<Container>
				<Navbar.Brand to="/"><i class="fa-solid fa-cubes fa-2xl me-2 ms-2"></i>
					MANAGE</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link to='/dashboard'
							as={Link}>Dashboard</Nav.Link>
						<Nav.Link to='/about'
							as={Link}>About</Nav.Link>
						<NavDropdown title={username} id="basic-nav-dropdown">
							<Button
								variant='secondary'
								className='font-weight-bolder text-white ms-4'
								onClick={logout}
							>
								Logout
								<i class="fa-solid fa-right-from-bracket fa-2xl ms-2"></i>
							</Button>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default NavbarMenu
