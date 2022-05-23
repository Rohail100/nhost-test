module.exports = (req, res) => {
    res.set('x-hasura-admin-secret',process.env.NHOST_ADMIN_SECRET)
    res.end()
  };
  