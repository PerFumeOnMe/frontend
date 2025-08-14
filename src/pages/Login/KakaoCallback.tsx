import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../apis/axios";
import { LOCAL_STORAGE_KEY } from "../../constants/apis/key";

export default function KakaoCallback() {
  const navigate = useNavigate();
  const didRun = useRef(false); 

  useEffect(() => {
    if (didRun.current) return;
    didRun.current = true;

    localStorage.removeItem(LOCAL_STORAGE_KEY.accessToken);
    localStorage.removeItem(LOCAL_STORAGE_KEY.refreshToken);
    localStorage.removeItem("isLoggedIn");

    const code = new URL(window.location.href).searchParams.get("code");
    console.log("인가 코드:", code);

    if (!code) {
      alert("카카오 로그인 실패: code 없음");
      navigate("/login", { replace: true });
      return;
    }

    (async () => {
      try {
        const response = await axiosInstance.post(
          "/auth/social/kakao",
          null,
          {
            params: { code: encodeURIComponent(code) },
            headers: { "Content-Type": "application/json" },
          }
        );

        console.group("[카카오 로그인 성공]");
        console.log("status:", response.status);
        console.log("data:", response.data);
        console.groupEnd();

        const data = response.data;
        const headers = response.headers ?? {};

        const accessTokenFromHeader =
          headers["authorization"]?.replace(/^Bearer\s+/i, "") ?? null;
        const refreshTokenFromHeader = headers["refresh-token"] ?? null;

        const accessTokenFromBody = data?.accessToken ?? null;
        const refreshTokenFromBody = data?.result?.refreshToken ?? null;

        const accessToken = accessTokenFromHeader ?? accessTokenFromBody;
        const refreshToken = refreshTokenFromHeader ?? refreshTokenFromBody;

        if (data?.isSuccess && accessToken && refreshToken) {
          localStorage.setItem(LOCAL_STORAGE_KEY.accessToken, JSON.stringify(accessToken));
          localStorage.setItem(LOCAL_STORAGE_KEY.refreshToken, JSON.stringify(refreshToken));
          localStorage.setItem("isLoggedIn", "true");

          console.log("온보딩 진입 - isLoggedIn:", localStorage.getItem("isLoggedIn"));
          console.log("accessToken 저장됨:", !!localStorage.getItem(LOCAL_STORAGE_KEY.accessToken));

          navigate("/onboarding", { replace: true });
        } else {
          console.warn("[로그인 실패] 명세 조건 불충족:", {
            isSuccess: data?.isSuccess,
            hasAccessToken: !!accessToken,
            hasRefreshToken: !!refreshToken,
          });
          alert("카카오 로그인 실패: 토큰 누락 또는 실패 응답");
          navigate("/login", { replace: true });
        }
      } catch (err: any) {
        console.group("[카카오 로그인 에러]");
        console.log("status:", err?.response?.status);
        console.log("data:", err?.response?.data);
        console.groupEnd();

        localStorage.removeItem(LOCAL_STORAGE_KEY.accessToken);
        localStorage.removeItem(LOCAL_STORAGE_KEY.refreshToken);
        localStorage.removeItem("isLoggedIn");

        alert("카카오 로그인 실패: 서버 에러");
        navigate("/login", { replace: true });
      }
    })();
  }, [navigate]);

  return <div className="text-center mt-20">카카오 로그인 중입니다...</div>;
}
