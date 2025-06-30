import './App.css'
//import LoginPage from "./pages/Login/LoginPage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignupPage from './pages/Login/SignupPage';

function App() {

  return (
    <>
      <div>
            <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignupPage />} />
        {/* <Route path="/" element={<LoginPage />} /> */}
        {/* 추후에 회원가입 페이지 추가 시: */}
        {/* <Route path="/signup" element={<SignupPage />} /> */}
      </Routes>
    </BrowserRouter>
      </div>
    </>
  )
}

export default App
