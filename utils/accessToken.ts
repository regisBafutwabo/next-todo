/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import jwt_decode from "jwt-decode";

export const getAccessToken = () => {
  const token: string = localStorage.getItem("tok") || "";
  return token;
};

export const getId = () => {
  const token = localStorage.getItem("tok") || "";
  const decoded: any = jwt_decode(token);
  return (
    (decoded["https://hasura.io/jwt/claims"]["x-hasura-user-id"] as string) ||
    ""
  );
};
