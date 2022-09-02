const { genUsers, INITIAL_USERS } = require("./genUsers");

function User(initialUsers = [], genUsers = () => []) {
  let USERS = [...initialUsers];

  function seedUsers() {
    USERS = [...genUsers()];
  }

  function findOne(userId = "") {
    return USERS.find((user) => user.id === userId);
  }

  function updateOne(userId = "", firstName = "", lastName = "") {
    USERS = USERS.map((user) => {
      if (user.id !== userId) {
        return user;
      }

      return {
        ...user,
        firstName: firstName,
        lastName: lastName,
      };
    });

    return findOne(userId);
  }

  function deleteOne(userId = "") {
    const found = findOne(userId);

    USERS = [...USERS.filter((user) => user.id !== userId)];

    return found;
  }

  function getUser() {
    return USERS[0];
  }

  function getUsers() {
    return USERS;
  }

  return {
    seedUsers: () => seedUsers(),
    getUser: (userId) => getUser(userId),
    getUsers: () => getUsers(),
    deleteOne: (userId) => deleteOne(userId),
    updateOne: (userId, firstName, lastName) => {
      return updateOne(userId, firstName, lastName);
    },
    findOne: (userId) => findOne(userId),
  };
}

module.exports = {
  User: User(INITIAL_USERS, genUsers),
};
