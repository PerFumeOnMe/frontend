import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import RootLayout from "./layout/root-layout.tsx";
import MainPage from "./pages/MainPage.tsx";
import LoginPage from "./pages/Login/LoginPage.tsx";
import SignupPage from "./pages/Login/SignupPage.tsx";
import MyPage from "./pages/MyPage.tsx";
import PBTIPage from "./pages/PBTIPage.tsx";
import DiaryPage from "./pages/DiaryPage.tsx";
import ProtectedRoute from "./components/common/ProtectedRoute.tsx";
import KakaoSignupPage from "./pages/Login/KakaoSignupPage.tsx";
import PerfumLabPage from "./pages/PerfumeLabPage.tsx";
import LabLoadingPage from "./pages/LabLoadingPage.tsx";
import LabResultPage from "./pages/LabResultPage.tsx";
import ChatbotPage from "./pages/Chatbot/ChatbotPage.tsx";
import ChoosePathPage from "./pages/ChoosePathPage.tsx";
import ImageKeywordPage from "./pages/ImageKeyword/ImageKeywordPage.tsx";
import ImageKeywordLoading from "./pages/ImageKeyword/ImageKeywordLoading.tsx";
import FilterPage from "./pages/FilterPage.tsx";

const router = createBrowserRouter([
  // 로그인, 회원가입은 보호 라우트 없이 누구나 접근 가능
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/kakao",
    element: <KakaoSignupPage />,
  },
  // 아래는 보호 라우트로 감싼 실제 서비스 페이지들
  {
    element: <ProtectedRoute />, // 보호 라우트
    children: [
      {
        path: "/",
        element: <RootLayout />,
        errorElement: <NotFoundPage />,
        children: [
          { index: true, element: <MainPage /> },
          { path: 'PBTI', element: <PBTIPage /> },
          { path: 'Diary', element: <DiaryPage /> },
          { path: 'MyPage', element: <MyPage /> },
          { path: 'choose-path', element: <ChoosePathPage /> },
          { path: 'filter', element: <FilterPage /> },
          { 
            path: 'image-keyword',
            children: [
              { index: true, element: <ImageKeywordPage /> },
              { path: 'loading', element: <ImageKeywordLoading /> }
            ]
          }
        ]
      },
      {
        path: '/Chatbot',
        element: <ChatbotPage />
      },
      {
        path: "/lab",
        children: [
          {
            index: true,
            element: <PerfumLabPage />,
          },
          {
            path: "loading",
            element: <LabLoadingPage />,
          },
          {
            path: "result",
            element: <LabResultPage />,
          },
        ],
      }
    ]
  }
]);

function App() {
  return (
    <div className="w-full h-screen bg-amber-200 flex justify-center">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
