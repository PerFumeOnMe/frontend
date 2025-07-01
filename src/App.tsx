import {createBrowserRouter, RouterProvider} from "react-router-dom";

import NotFoundPage from './pages/NotFoundPage.tsx';
import RootLayout from "./layout/root-layout.tsx";
import MainPage from './pages/MainPage.tsx';
import LoginPage from './pages/LoginPage.tsx';
import MyPage from './pages/MyPage.tsx';
import PBTIPage from './pages/PBTIPage.tsx';
import DiaryPage from './pages/DiaryPage.tsx';
import ProtectedRoute from "./components/common/ProtectedRoute.tsx";

const router = createBrowserRouter([
    {
    path: "/login",
    element: <LoginPage />,
    },
    {
    element: <ProtectedRoute />, // 보호 라우트
    children: [
      {
        path: '/',
        element: <RootLayout />,
        errorElement: <NotFoundPage />,
        children: [
          { index: true, element: <MainPage /> },
          { path: 'PBTI', element: <PBTIPage /> },
          { path: 'Diary', element: <DiaryPage /> },
          { path: 'MyPage', element: <MyPage /> }
        ]
      }
    ]
  }
]);

function App() {
    return (
    <div className="min-h-screen h-auto w-full bg-amber-200 flex justify-center">
        <RouterProvider router={router}/>
    </div>
    )
}

export default App
