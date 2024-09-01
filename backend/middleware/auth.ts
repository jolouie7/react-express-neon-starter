import { User } from "@prisma/client";
import { Request, Response, NextFunction } from "express";
import passport from "passport";

export const isAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  passport.authenticate(
    "jwt",
    { session: false },
    (err: any, user: User | undefined) => {
      if (err || !user) {
        return res.status(401).json({ error: "Not authenticated." });
      }
      req.user = user;
      return next();
    }
  )(req, res, next);
};
