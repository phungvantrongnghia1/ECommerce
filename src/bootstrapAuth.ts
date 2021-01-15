import { Response, Request } from "express";
import passport from "passport";
import passportJWT from "passport-jwt";

export const bootstrapAuth = (app: any) => {
  console.log("vooooooooooooooooooooooooooooooooooo");
  const { Strategy, ExtractJwt } = passportJWT;
  const jwtStategy = new Strategy(
    {
      secretOrKey: "secrit",
      jwtFromRequest: ExtractJwt.fromHeader("authorization"),
    },
    (payload, done) => {
      console.log("payload  ne:>>", payload);
      return done(null, payload);
    }
  );
  passport.use(jwtStategy);
  passport.initialize();
  app.use((req: Request, res: Response, next: any) => {
    console.log("lai vooooooooooooooooooooooooooooooooooo");
    passport.authenticate("jwt", { session: false }, (error, user, info) => {
      console.log("user :>> ", user);
      console.log("info :>> ", info);
      if (user) req.user = user;
      if (error || (info && info.message === "invalid signature")) {
        console.log("error :>> ", error);
        return res.status(404).json({
          message: "invalid signature",
        });
      }
      next();
    })(req, res, next);
  });
};
