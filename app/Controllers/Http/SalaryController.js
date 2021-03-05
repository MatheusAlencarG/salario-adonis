'use strict'

const Salary = use('App/Models/Salary.js')

class SalaryController {

    async add({ request }) {

        const dataToCreate = request.only(['value'])

        return await Salary.create(dataToCreate);

    }

    async list() {
        return await Salary.all();
    }

    async show({ params }) {
        return await Salary.find(params.id);
    }

    async update({ params, request }) {

        const salary = await Salary.findOrFail(params.id);

        const dataToUpdate = request.only(['value']);

        salary.merge(dataToUpdate);

        await salary.save();

        return salary;

    }

    async delete({ params }) {

        const salary = await Salary.findOrFail(params.id)

        await salary.delete();

        return {
            message: 'Excluido com sucesso'
        }

    }

}

module.exports = SalaryController
