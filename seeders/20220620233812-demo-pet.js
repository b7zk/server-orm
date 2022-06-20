"use strict";

const pets = [];

for (let i = 0; i < 5; i++) {
  pets.push({
    name: `PETtest${i}`,
    adoptAct: "DUnno",
    specie: `specie${i}`,
    breed: `raza${i}`,
    sex: `macho`,
    colour: `negro`,
    ownerId: `${i}`,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("pets", pets, {});
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("pets", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
