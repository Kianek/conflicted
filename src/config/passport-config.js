import passport from 'passport';
import passportJwt from 'passport-jwt';
const JwtStrategy = passportJwt.Strategy;
const ExtractJwt = passportJwt.ExtractJwt;

const extractor = () => {};

const genOptions = () => ({
  jwt: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
  issuer: process.env.JWT_ISSUER,
  // TODO: specify audience after creating/deploying client app
  // audience:
});

const verify = (payload, done) => {
  // TODO: implement after completing DB services
};

const genJwtStrategy = (options, verify) => new JwtStrategy(options, verify);

passport.use(genJwtStrategy(genOptions(), verify));
