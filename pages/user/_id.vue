<template>
    <div v-if="user">
        <div class="wrapper">
            <div class="user__container">
                <img src="https://www.fillmurray.com/320/427" alt="Avatar">
                <div class="user__description">
                    <h2>{{ user.name }}</h2>
                    <h3>Website: {{user.website}}</h3>
                    <p>Phone: {{user.phone}}</p>
                    <p>Company: {{user.company.name}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    data() {
        return { 
            user: null,
        }
    },
    methods: {
        ...mapMutations([
       		'updateUsers',
		]),

        getData() {
            if ( this.$store.state.users == null ) {
                fetch(`https://jsonplaceholder.typicode.com/users/${this.$route.params.id}`)
                    .then((response) => response.json())
                    .then((json) => {
                        this.user = json;
                    });
            } else {
                let data = this.$store.state.users.filter(item => item.id == this.$route.params.id);
                this.user = data[0];
            }
    
        },
    },
    mounted() {
        this.getData();
    }
}
</script>

<style lang="sass">
    .user
        &__container
            max-width: 800px
            margin: 0 auto
            padding: 60px 0
            display: flex
            align-items: flex-start
            justify-content: flex-start
            img
                margin-right: 120px
        &__description
            h2,h3
                margin-bottom: 20px
            p
                margin-top: 15px
</style>
