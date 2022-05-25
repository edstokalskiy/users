<template>
    <section class="users">
        <div class="wrapper">
            <table class="users__table" 
                v-if="$store.state.usersByThree != null">
                <tr>
                    <th>
                        Name
                    </th>
                    <th>
                        Email
                    </th>
                    <th>
                        Username
                    </th>
                    <th>
                        Phone
                    </th>
                    <th>
                        Website
                    </th>
                </tr>
                <tr v-for="(user, i) of currentUsersData" 
                    :key="i" 
                    @click="openUserPage(user)">
                    <td>
                        {{user.name}}
                    </td>
                    <td>
                        {{user.email}}
                    </td>
                    <td>
                        {{user.username}}
                    </td>
                    <td>
                        {{user.phone}}
                    </td>
                    <td>
                        {{user.website}}
                    </td>
                </tr>
            </table>

            <div class="users__pagination">
                <div class="users__pagination-item" 
                    v-for="(item, i) of this.$store.state.usersByThree" 
                    :class="{ 'active' : i + 1 === page }" 
                    :key="i"
                    @click="goToPage(i + 1)">{{ i + 1 }}</div>
            </div>
            
        </div>
    </section>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'

export default {
    name: 'Users',
    data() {
        return {
            page: 1,
        }
    },
    computed: {
        currentUsersData() {
            return this.$store.state.usersByThree[this.page - 1];
        }
    },
    methods: {
        ...mapActions([
       		'chunkUsers',
		]),

        ...mapMutations([
       		'updateUsers',
            'updateUsersByThree',
		]),

        getData() {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then((response) => response.json())
                .then((json) => {
                    this.$store.commit('updateUsers', json);
                    this.chunkUsers();
                });
        },

        openUserPage(user) {
            this.$router.push('/user/' + user.id);
        },

        goToPage(page) {
            this.page = page;
        },
    },
    mounted() {
        if ( this.$store.state.users == null ) {
            console.error('users store empty');
            this.getData();
        } else {
            this.chunkUsers();
        }
    }
}
</script>

<style lang="sass" scoped>
    .users
        padding: 60px 0
        &__table
            width: 100%
            max-width: 800px
            margin: 0 auto
            tr
                &:nth-of-type(odd)
                    background: #efefef
                &:not(:first-of-type)
                    cursor: pointer
                    &:hover
                        background: #bfdad9
                &:first-of-type
                    background: #cdcdcd
                td,
                th
                    text-align: center
                    font-size: 16px
                    line-height: 120%
                    padding: 10px 5px
                    a
                        &:hover
                            text-decoration: underline
        &__pagination
            display: flex
            align-items: center
            justify-content: center
            margin: 20px auto
            &-item
                width: 24px
                height: 24px
                display: flex
                align-items: center
                justify-content: center
                margin: 0 2px
                border: 1px solid #ffb4b4
                cursor: pointer
                &.active
                    background: #cdcdcd
                    cursor: default !important
                &:hover:not(.active)
                    background: #bfdad9

</style>
