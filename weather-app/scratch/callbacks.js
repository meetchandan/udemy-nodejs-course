var getUser = (id, callback) => {
  var user = {
    id: id,
    name: "Chandan"
  };
  setTimeout(() => {
    callback(user);
  }, 2000);
};

getUser(34, (user) => {
  console.log(user);
})
