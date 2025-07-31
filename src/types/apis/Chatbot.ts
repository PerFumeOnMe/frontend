import type { CommonResponse } from "./common";

export type RequestChatbotMessage = {
    message : string
}

export type ResponseChatbotMessage = CommonResponse<string>

export type RequestChatbotHistory = {
    page : number,
    size : number,
}

export type ResponseChatbotHistory = {
    userMessage: string,
    botResponse: string,
    createdAt : Date,
}
