import { User } from "@prisma/client";
import { Request } from "express";

export type UserResponse = {
  name: string;
  email: string;
}

export type RegisterRequest = {
  name: string;
  email: string;
  password: string;
}

export type LoginRequest = {
  email: string;
  password: string;
}

export type LoginResponse = {
  token: string;
}

export function toUserResponse(user: User): UserResponse {
  return {
    name: user.name,
    email: user.email
  }
}

export interface UserRequest extends Request {
  user?: User;
}