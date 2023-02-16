"use strict"
Object.defineProperty(exports, "__esModule", { value: true })
exports.table1675264013793 = void 0
class table1675264013793 {
  name = "table1675264013793"
  async up(queryRunner) {
    await queryRunner.query(
      'CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "username" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))',
    )
  }
  async down(queryRunner) {
    await queryRunner.query('DROP TABLE "users"')
  }
}
exports.table1675264013793 = table1675264013793
