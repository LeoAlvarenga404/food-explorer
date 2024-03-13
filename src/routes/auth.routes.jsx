import { Routes, Route, Navigate } from 'react-router-dom';
import { SignIn } from '../pages/SignIn'
import { SignUp } from '../pages/SignUp'
import { Home } from '../pages/Home';
export function AuthRoutes(){
  return(
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/register" element={<SignUp/>}/>
      <Route path="*" element={<Navigate to="/"/>}/>
    </Routes>
  )
}