import jwt from "jsonwebtoken";

export function generateAccessToken(
  tokenUser: any,
  jwtSecret: string,
  expiresIn: string
) {
    const token = jwt.sign(tokenUser,jwtSecret, {
        algorithm: "HS256",
        header:{
            authrization: true
        },
        expiresIn
    })
    return { accessToken: token };
}
