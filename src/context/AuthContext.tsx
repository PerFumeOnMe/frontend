import { createContext, useContext, useEffect, useState } from "react";
import type { PropsWithChildren, ReactElement } from "react";
import type { RequestSigninDto } from "../types/apis/User";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { LOCAL_STORAGE_KEY } from "../constants/apis/key";
import { postLogout, postSignin } from "../apis/User";

interface AuthContextType {
    accessToken : string | null;
    refreshToken : string | null;
    name: string | null;
    login : (signinData : RequestSigninDto ) => Promise<void>;
    logout : () => Promise<void>
}

export const AuthContext = createContext<AuthContextType>({
    accessToken : null,
    refreshToken : null,
    name: null,
    login : async () => {},
    logout : async () => {},
});

export const AuthProvider = ({children}:PropsWithChildren): ReactElement => {
    const {
        getItem: getAccessTokenFromStorage,
        setItem: setAccessTokenInStorage,
        removeItem: removeAccessTokenFromStorage
    } = useLocalStorage(LOCAL_STORAGE_KEY.accessToken);

    const {
        getItem: getRefreshTokenFromStorage,
        setItem: setRefreshTokenInStorage,
        removeItem: removeRefreshTokenFromStorage
    } = useLocalStorage(LOCAL_STORAGE_KEY.refreshToken);
    
    const {
        getItem: getNameFromStorage,
        setItem: setNameInStorage,
        removeItem: removeNameFromStorage,
    } = useLocalStorage(LOCAL_STORAGE_KEY.userName ?? "userName");

    const [accessToken, setAccessToken] = useState<string|null>(
        getAccessTokenFromStorage(), // 지연 초기화
    )

    const [refreshToken, setRefreshToken] = useState<string|null>(
        getRefreshTokenFromStorage(), // 지연 초기화
    )

    const [name, setName] = useState<string|null>(null);

    useEffect(() => {
        const storedName = getNameFromStorage();
        if (storedName) {
            setName(storedName);
        }

    }, []);

    const login = async (signinData: RequestSigninDto) => {
        try {
            const { accessToken, data } = await postSignin(signinData);

            if (data){
                // 원시 토큰 값
                const rawAccessToken: string = accessToken;
                const rawRefreshToken: string = data.refreshToken;

                //console.log("typeof token:", typeof rawAccessToken); // string이어야 함
                //console.log("token:", rawAccessToken); // 🔍 여기
                //console.log("사용자 이름 : ", data.name)

                // ✅ 양쪽 쌍따옴표 감싸져 있으면 제거
                const cleanedAccessToken = rawAccessToken.replace(/^"(.*)"$/, '$1');
                const cleanedRefreshToken = rawRefreshToken.replace(/^"(.*)"$/, '$1');

                // 기존 값 클린업
                removeAccessTokenFromStorage();
                removeRefreshTokenFromStorage();
                removeNameFromStorage();

                // 저장 & 상태 반영
                setAccessTokenInStorage(cleanedAccessToken);
                setRefreshTokenInStorage(cleanedRefreshToken);
                setAccessToken(cleanedAccessToken);
                setRefreshToken(cleanedRefreshToken);
                
                const nextName = data.name ?? null;
                if (nextName) {
                    setNameInStorage(nextName);
                }
                setName(nextName);

                alert("로그인 성공");
            }
        } catch (error){
            console.error("로그인 오류",error)
            alert("로그인 실패")
        }
    }

    const logout = async() => {
        try {
            await postLogout();
            removeAccessTokenFromStorage()
            removeRefreshTokenFromStorage();
            removeNameFromStorage();

            setAccessToken(null);
            setRefreshToken(null);        
            setName(null); 

            alert("로그아웃 성공")
        } catch (error) {
            console.error("로그아웃 오류",error);
            alert("로그아웃 실패")
        }
    }

    return (
        <AuthContext.Provider value={{ accessToken, refreshToken, name, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
};

export const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("AuthContext를 찾을 수 없습니다.")
    }

    return context;
}