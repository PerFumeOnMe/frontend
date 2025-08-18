import { createContext, useContext, useState } from "react";
import type { PropsWithChildren, ReactElement } from "react";
import type { RequestSigninDto } from "../types/apis/User";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { LOCAL_STORAGE_KEY } from "../constants/apis/key";
import { postLogout, postSignin } from "../apis/User";

// 에러 메시지 매핑 유틸
const mapLoginErrorMessage = (err: any): string => {
  const msg =
    err?.response?.data?.message ||
    err?.response?.data?.error?.reason;
  if (msg) return msg as string;

  const code =
    err?.response?.data?.error?.errorCode ||
    err?.response?.data?.code ||
    err?.response?.status;

  if (code === "U001" || code === "AUTH001" || code === 404) {
    return "등록되지 않은 아이디입니다.";
  }
  if (code === "U002" || code === "AUTH002" || code === 401) {
    return "비밀번호가 올바르지 않습니다.";
  }
  return "아이디 또는 비밀번호가 올바르지 않습니다.";
};

interface AuthContextType {
  accessToken: string | null;
  refreshToken: string | null;
  login: (signinData: RequestSigninDto) => Promise<void>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType>({
  accessToken: null,
  refreshToken: null,
  login: async () => {},
  logout: async () => {},
});

export const AuthProvider = ({ children }: PropsWithChildren): ReactElement => {
  const {
    getItem: getAccessTokenFromStorage,
    setItem: setAccessTokenInStorage,
    removeItem: removeAccessTokenFromStorage,
  } = useLocalStorage(LOCAL_STORAGE_KEY.accessToken);

  const {
    getItem: getRefreshTokenFromStorage,
    setItem: setRefreshTokenInStorage,
    removeItem: removeRefreshTokenFromStorage,
  } = useLocalStorage(LOCAL_STORAGE_KEY.refreshToken);

  const [accessToken, setAccessToken] = useState<string | null>(
    getAccessTokenFromStorage(),
  );
  const [refreshToken, setRefreshToken] = useState<string | null>(
    getRefreshTokenFromStorage(),
  );

  const login = async (signinData: RequestSigninDto) => {
    try {
      const { accessToken, data } = await postSignin(signinData);

      if (data) {
        const rawAccessToken: string = accessToken;
        const rawRefreshToken: string = data.refreshToken;

        const cleanedAccessToken = rawAccessToken.replace(/^"(.*)"$/, "$1");
        const cleanedRefreshToken = rawRefreshToken.replace(/^"(.*)"$/, "$1");

        setAccessTokenInStorage(cleanedAccessToken);
        setRefreshTokenInStorage(cleanedRefreshToken);

        setAccessToken(cleanedAccessToken);
        setRefreshToken(cleanedRefreshToken);

        window.location.href = "/";
      }
    } catch (error: any) {
      console.error("로그인 오류", error);
      const message = mapLoginErrorMessage(error);

      throw new Error(message);
    }
  };

  const logout = async () => {
    try {
      await postLogout();
      removeAccessTokenFromStorage();
      removeRefreshTokenFromStorage();

      setAccessToken(null);
      setRefreshToken(null);

      alert("로그아웃 성공");
    } catch (error) {
      console.error("로그아웃 오류", error);
      alert("로그아웃 실패");
    }
  };

  return (
    <AuthContext.Provider value={{ accessToken, refreshToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("AuthContext를 찾을 수 없습니다.");
  }
  return context;
};
