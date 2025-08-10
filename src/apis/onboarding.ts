import { axiosInstance } from "../apis/axios";

export type OnboardingBody = {
  nickname: string;
  imageURL: string | null; // 이미지 업로드 미연동 시 null/빈문자열 가능
  gender: "FEMALE" | "MALE" | "NONE";
  age: "TEENAGER" | "TWENTIES" | "THIRTIES" | "FORTIES" | "NONE";
  noteCategoryId: number[]; // 길이 3
};

export async function postOnboarding(body: OnboardingBody) {
  console.group("[POST] /users/onboarding");
  console.log("Header");
  console.log("Content-Type: application/json");
  console.log("Authorization: Bearer {Access-Token}");
  console.log("Request Body");
  console.log(JSON.stringify(body, null, 2));
  console.groupEnd();

  const res = await axiosInstance.post("/users/onboarding", body, {
    headers: { "Content-Type": "application/json" },
  });

  console.group("Response");
  console.log(JSON.stringify(res.data, null, 2));
  console.groupEnd();

  return res.data;
}
