function makeGreeting(name) {
  const who = (name && String(name).trim()) || "world";
  return `Hello, ${who}!`;
}

module.exports = { makeGreeting };
