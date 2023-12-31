import { Navigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import Spinner from 'react-bootstrap/Spinner'
import NavbarMenu from '../layout/NavbarMenu'
import Dashboard from '../../page/Dashboard'

const ProtectedRoute = () => {
	const {
		authState: { authLoading, isAuthenticated }
	} = useContext(AuthContext)

	if (authLoading)
		return (
			<div className='spinner-container'>
				<Spinner animation='border' variant='info' />
			</div>
		)


	return (
		isAuthenticated ? (
			<div>
				<NavbarMenu />
				<Dashboard />
			</div>
		) : (
			<Navigate to='/login' />
		)


	)
}

export default ProtectedRoute;
