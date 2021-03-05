'use strict'

const Register = use('App/Models/User.js')

class RegisterController {

    async add({ request }) {

        const dataToCreate = request.only(['username', 'email', 'password', 'fkRoles'])

        return await Register.create(dataToCreate);

    }

    async list() {
        return await Register.all();
    }

    async show({ params }) {
        return await Register.find(params.id);
    }

    async update({ params, request }) {

        const register = await Register.findOrFail(params.id);

        const dataToUpdate = request.only(['username', 'email', 'password', 'fkRoles']);

        register.merge(dataToUpdate);

        await register.save();

        return register;

    }

    async delete({ params }) {

        const register = await Register.findOrFail(params.id)

        await register.delete();

        return {
            message: 'Excluido com sucesso'
        }

    }

}

module.exports = RegisterController
