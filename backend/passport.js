const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const passport = require("passport");
const GOOGLE_CLIENT_ID =
  "59551675336-nskrjk3mvi3oj3esbf393ko712kqao51.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";
GITHUB_CLIENT_ID ="24d85a04b62b1baaf790";
GITHUB_CLIENT_SECRET = "0b523e769c7fc43bceb31a5f7fe2f3e71e5510af";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accesssToken, refereshToken, profile, done) {
      done(null, profile)
    }
  )
);
passport.use(
  new GithubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },

    function (accesssToken, refereshToken, profile, done) {
      done(null, profile)
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
