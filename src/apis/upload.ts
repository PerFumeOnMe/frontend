import { axiosInstance } from "./axios";

export const getPresignedUrl = async (fileName: string) => {
  console.groupCollapsed("[S3 Presigned URL] Request");
  console.log("POST /s3/upload-url");
  console.log("Request body:", { fileName });
  console.groupEnd();

  try {
    const res = await axiosInstance.post(
      "/s3/upload-url",
      { fileName },
      { headers: { "Content-Type": "application/json" } }
    );

    const data = res.data;
    const result = data?.result ?? data;

    console.groupCollapsed("[S3 Presigned URL] Response[200]");
    console.log("status:", res.status);
    console.log("body:", data);
    console.groupEnd();

    return {
      presignedUrl: result.presignedUrl,
      s3Url: result.s3Url,
      uuid: result.uuid,
    };
  } catch (e: any) {
    if (e?.response) {
      const status = e.response.status;
      const body = e.response.data;

      console.groupCollapsed(`[S3 Presigned URL] Response[${body?.code ?? status}]`);
      console.log("status:", status);
      console.log("body:", body);
      console.groupEnd();
    } else {
      console.error("[S3 Presigned URL] Network/Unknown error:", e?.message ?? e);
    }
    throw e;
  }
};

export const uploadToS3 = async (presignedUrl: string, file: File) => {
  console.groupCollapsed("[S3 PUT] Request");
  console.log("URL (presigned):", presignedUrl);
  console.log("Headers:", { "Content-Type": file.type });
  console.log("File:", { name: file.name, size: file.size, type: file.type });
  console.groupEnd();

  const res = await fetch(presignedUrl, {
    method: "PUT",
    headers: { "Content-Type": file.type },
    body: file,
  });

  if (!res.ok) {
    const text = await res.text();
    console.groupCollapsed(`[S3 PUT] Response[${res.status}]`);
    console.log("body:", text);
    console.groupEnd();
    throw new Error(`S3 업로드 실패: ${res.status} ${text}`);
  }

  console.log("[S3 PUT] Response[200] 업로드 성공");
};
