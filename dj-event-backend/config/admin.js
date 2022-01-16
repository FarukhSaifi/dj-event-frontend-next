module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3a1ca215f5556a0a051f2d6a30e4310b'),
  },
});
