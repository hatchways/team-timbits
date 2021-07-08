const passport = require("passport");
const User = require("../models/User");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.serializeUser((user, done) => {
  done(null, user)
})

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
      done(null, user)
  })
})

passport.use(
  new GoogleStrategy({
      callbackURL: '/auth/google/redirect',
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      passReqToCallback: true,
  }, (req, accessToken, refreshToken, profile, done) => {
      //add accessToken to session
      req.session.accessToken = accessToken;
      User.findOne({ id: profile.id }).then((currentUser) => {
          if(currentUser){
              done(null, currentUser)
          } else {
              new User({
                  username: profile.displayName,
                  email: profile._json.email,
                  strategy: 'google',
                  id: profile.id,
                  picture: profile._json.picture,
                  refreshToken: refreshToken,
              }).save().then((newUser) => {
                  done(null, newUser)
              })
          }
      })
  })
)