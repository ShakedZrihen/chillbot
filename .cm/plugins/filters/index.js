module.exports = {
  sayHello: async (param, callback) => {
    console.log({param, callback});
    return callback(null, `hello from custom filter!`);
  }
};
