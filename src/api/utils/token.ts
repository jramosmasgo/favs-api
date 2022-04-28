import jwt, { UserIdJwtPayload } from "jsonwebtoken";

export const createToken = (payload: {}): string => {
  return jwt.sign(payload, `${process.env.JWT_SECRET}`, {
    expiresIn: "30m",
  });
};

export const validateToken = (token: string) => {
  return jwt.verify(token, `${process.env.JWT_SECRET}`) as UserIdJwtPayload;
};
