module.exports = {
  sayHello: async (callback) => {
    return callback(null, `hello from custom filter!`);
  }
};
