const database = require("./database-connection");

module.exports = {
    returnFirstItem(arr) {
        return arr[0];
    },
    list() {
        return database('coffee')
    },
    read(id) {
        return database('coffee')
            .where('id', id)
            .then(this.returnFirstItem)
    },
    create(coffee) {
        return database('coffee')
            .insert(coffee)
            .returning('*')
            .then(this.returnFirstItem)
    },
    update(id, coffee) {
        return database('coffee')
            .update(coffee)
            .where('id', id)
            .returning('*')
            .then(this.returnFirstItem)

    },
    delete(id) {
        return database('coffee')
            .delete()
            .where('id', id)
    }
};
