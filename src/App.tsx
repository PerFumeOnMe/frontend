import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import RootLayout from "./layout/root-layout.tsx";
import MainPage from "./pages/MainPage.tsx";
import LoginPage from "./pages/Login/LoginPage.tsx";
import SignupPage from './pages/Login/SignupPage.tsx';
import MyPage from './pages/MyPage.tsx';
import PBTIMainPage from "./pages/PBTI/PBTIMainPage.tsx";
import DiaryPage from './pages/DiaryPage.tsx';
import ProtectedRoute from "./components/common/ProtectedRoute.tsx";
import KakaoSignupPage from "./pages/Login/KakaoSignupPage.tsx";
import PerfumLabPage from "./pages/perfumeLab/PerfumeLabPage.tsx";
import LabLoadingPage from "./pages/perfumeLab/LabLoadingPage.tsx";
import LabResultPage from "./pages/perfumeLab/LabResultPage.tsx";
import ChatbotPage from "./pages/Chatbot/ChatbotPage.tsx";
import ChoosePathPage from "./pages/ChoosePathPage.tsx";
import ImageKeywordPage from "./pages/ImageKeyword/ImageKeywordPage.tsx";
import ImageKeywordLoading from "./pages/ImageKeyword/ImageKeywordLoading.tsx";
import FilterPage from "./pages/FilterPage.tsx";
import AllPerfumePage from "./pages/AllPerfumePage.tsx";
import OnboardingRouter from "./pages/Onboarding/index.tsx";
import PBTIQuestionPage from "./pages/PBTI/PBTIQuestionPage.tsx";
import PBTIResultPage from "./pages/PBTI/PBTIResultPage.tsx";

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
  {
    path: "/onboarding",
    element: <OnboardingRouter />,
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
          { index: true, element: <Navigate to="/Main" replace /> }, // ✅ 리다이렉트 추가
          { path: 'Main', element: <MainPage /> },
          { path: 'PBTI', element: <PBTIMainPage /> },
          { path: 'Diary', element: <DiaryPage /> },
          { path: 'MyPage', element: <MyPage /> },
          { path: 'choose-path', element: <ChoosePathPage /> },
          { path: 'filter', element: <FilterPage /> },
          { path: 'PBTI',
            children: [
              { index: true, element: <PBTIMainPage /> },
              { path: 'question', element: <PBTIQuestionPage /> },
              { path: 'result', element: <PBTIResultPage />}
            ]
          },
          { path: 'all-perfume', element: <AllPerfumePage /> }
        ]
      },
      {
        path: "/image-keyword",
        children: [
          {
            index: true,
            element: <ImageKeywordPage />,
          },
          {
            path: "loading",
            element: <ImageKeywordLoading />,
          },
        ]
      },
      {
        path: "/Chatbot",
        element: <ChatbotPage />,
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
      },
    ],
  },
]);

function App() {
  return (
    <div className="w-full h-screen bg-amber-200 flex justify-center">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
