import passport from "passport";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import prisma from "../prisma";

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET || "your_jwt_secret",
};

passport.use(
  new JwtStrategy(jwtOptions, async (payload, done) => {
    try {
      const user = await prisma.user.findUnique({ where: { id: payload.id } });
      if (user) {
        return done(null, user);
      }
      return done(null, false);
    } catch (error) {
      return done(error, false);
    }
  })
);

export default passport;
