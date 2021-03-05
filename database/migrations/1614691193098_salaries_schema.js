'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SalariesSchema extends Schema {
  up () {
    this.create('salaries', (table) => {
      table.increments()
      table.bigInteger('value').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('salaries')
  }
}

module.exports = SalariesSchema
