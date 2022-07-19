const r = require('../config')

module.exports = {
    insert: async (data) => {
        const result = await r.table('familyName').insert({
            familyname: data.familyname,
            userId: data.userId
        }).run()

        return result
    },
    getAll: (user_id) => {
        return r.table('familyName').filter({ userId: user_id }).run()
    },
    delete: (id) => {
        return r.table('familyName').get(id).delete().run()
    },
    update: (id, familyname) => {
        return r.table('familyName').get(id).update({ familyname: familyname }).run()
    }

}