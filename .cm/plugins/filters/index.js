module.exports = {
  sayHello: async (param, callback) => {
    console.log("here i am", { param, callback });
    return callback(null, `hello from custom filter!`);
  }
};
