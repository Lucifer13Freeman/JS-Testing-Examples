const delay = (callback, ms) => new Promise(resolve => setTimeout(() => resolve(callback()), ms));
module.exports = delay;