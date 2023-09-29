import { Routes, Route, Navigate } from 'react-router-dom';
import Auth from '../src/page/auth'
import AuthContextProvider from './contexts/AuthContext'
import PostContextProvider from './contexts/PostContext'
import ProtectedRoute from './components/routing/ProtectedRoute'
import About from './page/About'
//import Dashboard from './page/Dashboard'

function App() {
  return (
    <AuthContextProvider>
      <PostContextProvider>

        <Routes>
          <Route path='/' element={<Navigate to='/login' />}></Route>
          <Route path='/login' element={<Auth authRoute='login' />}></Route>
          <Route path='/register' element={<Auth authRoute='register'></Auth>}></Route>
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute />
            }
          ></Route>
          <Route path='/about' element={<About />}></Route>
        </Routes>
      </PostContextProvider>
    </AuthContextProvider>
  );
}

export default App;