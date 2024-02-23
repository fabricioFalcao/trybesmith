import { User, UserResponseType } from "../../src/types/User";

const usersResponseList: UserResponseType[] = [
  {
    username: "Hagar",
    productIds: [1, 2],
  },
  {
    username: "Eddie",
    productIds: [3, 4],
  },
  {
    username: "Helga",
    productIds: [5],
  },
];

const userLogin = {
  username: "Pitty",
  password: "pittyveia",
}

const userFromDb = {
  id: 1,
  username: "Pitty",
  vocation: "Anciã",
  level: 99,
  password: "$2a$10$bhWpFVUI63jHmOOZiVOF.OZFqIawFRinVgPDC/ZEkQc6dldLuPe9G",
}

const usersListFromDb: User[] = [
  {
    id: 1,
    username: "Hagar",
    vocation: "Guerreiro",
    level: 10,
    password: "$2a$10$Hv1eyE0vOCXkTCCb4SYX0.Er8btBiUgLw5RnRZ71snXMSGnH85waC",
  },
  {
    id: 2,
    username: "Eddie",
    vocation: "Guerreiro",
    level: 8,
    password: "$2a$10$cRQKdmq3s/MKXwamOKZJNu3rKdToJwGoI55eoVuDbrE1IfoCwbFpW",
  },
  {
    id: 3,
    username: "Helga",
    vocation: "Curandeira",
    level: 9,
    password: "$2a$10$TC8hNJtxjrnXF62Ad/7eiOr.UtKU2Mi/b.VoptOLXiAMgGn8OANe2",
  },
];

const usersWithProductIds = [
  {
    dataValues: {
      "username": "Hagar",
      "productIds": [
        {
          "id": 1
        },
        {
          "id": 2
        },
      ]
    }
  },
  {
    dataValues: {
      "username": "Eddie",
      "productIds": [
        {
          "id": 3
        },
        {
          "id": 4
        }
      ]
    }
  },
  {
    dataValues: {
      "username": "Helga",
      "productIds": [
        {
          "id": 5
        }
      ]
    }
  }
]

export default {
  usersListFromDb,
  usersResponseList,
  usersWithProductIds,
  userLogin,
  userFromDb
}