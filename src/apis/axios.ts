import axios from "axios";
import { LOCAL_STORAGE_KEY } from "../constants/apis/key";

export const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_PERFUMEONME_API_URL,
})

// 요청 인터셉터: 매 요청마다 실시간으로 토큰을 확인하고 추가
axiosInstance.interceptors.request.use(
    (config) => {
        // localStorage에서 현재 토큰 값을 가져옴
        const rawAccessToken = localStorage.getItem(LOCAL_STORAGE_KEY.accessToken);

        // ✅ 따옴표로 감싸져있으므로 이를 제거
        const accessToken = rawAccessToken?.replace(/^"(.*)"$/, '$1');
        
        // 토큰이 존재할 때만 Authorization 헤더 추가
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
            console.log("✅ Authorization 헤더 추가됨:", config.headers.Authorization);
        } else {
            console.warn("⚠️ accessToken 없음, Authorization 헤더 미포함");
        }
        
        // 기본 헤더 설정
        config.headers['Content-Type'] = 'application/json';
        config.headers['Accept'] = 'application/json';
        
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// 응답 인터셉터: 401 에러 처리 등
axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // 401 Unauthorized 에러 처리
        if (error.response?.status === 401) {
            // 토큰이 만료되었거나 유효하지 않은 경우
            localStorage.removeItem(LOCAL_STORAGE_KEY.accessToken);
            localStorage.removeItem(LOCAL_STORAGE_KEY.refreshToken);
            
            // 로그인 페이지로 리다이렉트 (선택사항)
            // window.location.href = '/login';
        }
        
        return Promise.reject(error);
    }
);