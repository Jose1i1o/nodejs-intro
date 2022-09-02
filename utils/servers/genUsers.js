const uuid = require("uuid").v4;
const faker = require("faker");

function genUsers() {
  return [
    {
      id: uuid(),
      firstName: faker.name.findName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
    },
    {
      id: uuid(),
      firstName: faker.name.findName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
    },
    {
      id: uuid(),
      firstName: faker.name.findName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
    },
    {
      id: uuid(),
      firstName: faker.name.findName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
    },
    {
      id: uuid(),
      firstName: faker.name.findName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
    },
  ];
}

const INITIAL_USERS = [
  {
    id: "dbfa38ce-2d51-4d8f-9953-5cf29dc130ce",
    firstName: "Damon Zemlak",
    lastName: "Reichel",
    email: "Fredy_Wehner92@gmail.com",
  },
  {
    id: "62728d42-1001-44d5-83f5-fa936bfc45f6",
    firstName: "Carl Daugherty",
    lastName: "Hintz",
    email: "Arlie.Wyman@hotmail.com",
  },
  {
    id: "9bfe04b6-9784-4461-9ea1-dc99923b58dd",
    firstName: "Drew Breitenberg",
    lastName: "Greenfelder",
    email: "Elnora.Borer@hotmail.com",
  },
  {
    id: "c6619287-1d8d-4b05-a680-d628844dc5b3",
    firstName: "Nicholas Flatley",
    lastName: "Pfeffer",
    email: "Alyson39@yahoo.com",
  },
  {
    id: "5fb4756a-daa0-4c5d-a1bb-652ed7cc1383",
    firstName: "Miss Madeline Conroy",
    lastName: "Nicolas",
    email: "Ross.Cronin@hotmail.com",
  },
];

module.exports = {
  genUsers: genUsers,
  INITIAL_USERS: INITIAL_USERS,
};
