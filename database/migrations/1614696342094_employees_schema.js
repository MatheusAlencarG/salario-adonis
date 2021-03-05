'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EmployeesSchema extends Schema {
  up () {
    this.create('employees', (table) => {
      table.increments()
      table.string('name', 100).notNullable()
      table.integer('telephone').notNullable()
      table.string('cidy', 50).notNullable()
      table.string('street', 50).notNullable()
      table
      .integer('fkSalaries')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('salaries')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      table
      .integer('fkUser')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('employees')
  }
}

module.exports = EmployeesSchema
