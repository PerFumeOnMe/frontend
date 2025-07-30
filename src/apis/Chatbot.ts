import type { RequestChatbotHistory, RequestChatbotMessage, ResponseChatbotHistory, ResponseChatbotMessage } from "../types/apis/Chatbot";
import { axiosInstance } from "./axios"


export const postChatbot = async ( body : RequestChatbotMessage ):Promise<ResponseChatbotMessage> => {
    const { data } = await axiosInstance.post("/chatbot", body);

    return data
}

export const getChatbot = async ( body : RequestChatbotHistory ):Promise<ResponseChatbotHistory> => {
    const { data } = await axiosInstance.get("/chatbot/history", {
        params : body,
    });

    return data
}