'use strict'

const Employee = use('App/Models/Employee.js')

class EmployeeController {

    async add({ request }) {

        const dataToCreate = request.only(['name', 'telephone', 'cidy', 'street', 'fkSalaries', 'fkUser'])

        return await Employee.create(dataToCreate);

    }

    async list() {
        return await Employee.all();
    }

    async show({ params }) {
        return await Employee.find(params.id);
    }

    async update({ params, request }) {

        const employee = await Employee.findOrFail(params.id);

        const dataToUpdate = request.only(['name', 'telephone', 'cidy', 'street', 'fkSalaries', 'fkUser']);

        employee.merge(dataToUpdate);

        await employee.save();

        return employee;

    }

    async delete({ params }) {

        const employee = await Employee.findOrFail(params.id)

        await employee.delete();

        return {
            message: 'Excluido com sucesso'
        }

    }

}

module.exports = EmployeeController
