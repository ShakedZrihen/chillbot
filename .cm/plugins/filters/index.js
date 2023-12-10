module.exports = {
  sayHello: (param, callback) => {
    console.log({param, callback});
    return callback(null, `hello from custom filter!`);
  }
};
