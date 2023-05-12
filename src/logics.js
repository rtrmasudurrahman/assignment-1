const { faker } = require("@faker-js/faker");

const generateRandomNumber = (start, end) => {
  const randomNumber = Math.floor(Math.random() * (end - start + 1)) + start;
  return randomNumber;
};

const countCharacter = str => {
  let letters = str.replace(/[^a-zA-Z]/g, "").length;
  let symbols = str.replace(/[\w\s]/g, "").length;
  let numerics = str.replace(/[^\d]/g, "").length;
  return {
    letters,
    symbols,
    numerics,
  };
};

const generateFakeProfile = userProperties => {
  const generatedProperties = {
    firstname: faker.name.firstName(),
    lastname: faker.name.lastName(),
    email: faker.internet.email(),
    age: faker.datatype.number({ min: 18, max: 50 }),
    address: faker.address.streetAddress(),
    avatar: faker.internet.avatar(),
  };
  const person = {};
  userProperties.map(property => {
    if (generatedProperties.hasOwnProperty(property.toLowerCase())) {
      person[property] = generatedProperties[property];
    }
  });

  return person;
};
module.exports = {
  generateRandomNumber,
  countCharacter,
  generateFakeProfile,
};
