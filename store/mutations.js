export default {
    updateUsers(state, data) {
        state.users = data;
    },

    addUser(state, data) {
        state.users.push(data);
    },

    updateUsersByThree(state, data) {
        state.usersByThree = data;
    },
}