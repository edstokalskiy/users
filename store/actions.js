export default {
    chunkUsers({ state, commit }) {
        let users = state.users;
        let result = [];
        let size = 3;
        let chunk = [];
        let acc = 1;
        for(let i = 0; i < Object.keys(users).length; i++) {
            if ( acc == size ) {
                chunk.push(users[i]);
                result.push(chunk);
                chunk = null;
                chunk = [];
                acc = 1;
            } else {
                chunk.push(users[i]);
                acc++;
                if ( i == Object.keys(users).length - 1 ) {
                    result.push(chunk);
                }
            }
        }

        commit('updateUsersByThree', result)
        
    },
}