'use strict'

const Role = use('App/Models/Role.js')

class RoleController {

    async add({ request }) {

        const dataToCreate = request.only(['name', 'permissions'])

        return await Role.create(dataToCreate);

    }

    async list() {
        return await Role.all();
    }

    async show({ params }) {
        return await Role.find(params.id);
    }

    async update({ params, request }) {

        const role = await Role.findOrFail(params.id);

        const dataToUpdate = request.only(['name', 'permissions']);

        role.merge(dataToUpdate);

        await role.save();

        return role;

    }

    async delete({ params }) {

        const role = await Role.findOrFail(params.id)

        await role.delete();

        return {
            message: 'Excluido com sucesso'
        }

    }

}

module.exports = RoleController
