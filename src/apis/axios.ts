import axios from "axios";
import { LOCAL_STORAGE_KEY } from "../constants/apis/key";

const base = import.meta.env.VITE_PERFUMEONME_API_URL ?? "/api";

// 생산(https) 환경에서 http 절대주소를 쓰려고 하면 자동으로 /api 로 대체
const isHttps = typeof window !== "undefined" && window.location.protocol === "https:";
const isHttpAbsolute = /^http:\/\//i.test(base);
const resolvedBaseURL = isHttps && isHttpAbsolute ? "/api" : base;

export const axiosInstance = axios.create({
  baseURL: resolvedBaseURL,
  withCredentials: true,
});

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

// 응답 인터셉터: 401, 400 에러 처리 등
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
        }
        
        // 400 Bad Request 에러 처리 - 특정 URL 패턴에 대해서만 조용히 처리
        if (error.response?.status === 400 && error.config.url.includes('/fragrances/allow/')) {
            return Promise.resolve({ 
                data: { 
                    isSuccess: false, 
                    code: 'COMMON400', 
                    message: '향수를 찾을 수 없습니다.',
                    result: null 
                } 
            });
        }
        
        return Promise.reject(error);
    }
);