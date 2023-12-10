module.exports = {
  sayHello: async (param, callback) => {
    return callback(null, `hello ${param} from custom filter!`);
  }
};
