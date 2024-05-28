"use strict";
import { User } from "../utils/constants.js";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", User);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", null, {});
  },
};