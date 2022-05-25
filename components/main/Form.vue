<template>
    <section class="form">
        <div class="wrapper">
            <form ref="form">
                <h3>Add new user</h3>
                <div class="input-field" :class="{ error : $v.$error && !$v.name.required  }">
                    <input type="text" autocomplete="off" v-model="$v.name.$model" name="name" id="name" placeholder="name">
                </div>
                <div class="input-field"  :class="{ error : $v.$error && (!$v.email.required || !$v.email.email) }">
                    <input type="email" autocomplete="off" v-model="$v.email.$model" name="email" id="email" placeholder="email">
                </div>
                <div class="input-field"  :class="{ error : $v.$error && (!$v.phone.required || !$v.phone.length13) }">
                    <input type="tel" autocomplete="off" v-model="$v.phone.$model" name="phone" id="phone" placeholder="phone">
                    <div class="error" v-if="$v.$error && !$v.phone.length13">Must be 13 characters (+380000000000)</div>
                </div>
                <div class="input-field">
                    <input type="text" v-model="username" name="username" id="username" placeholder="username">
                </div>
                <div class="input-field">
                    <input type="text" v-model="website" name="website" id="website" placeholder="website">
                </div>
                <div class="btn" @click="send">Add</div>
            </form>
        </div>
    </section>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
import { required, email } from 'vuelidate/lib/validators'

const length13 = (value) => value.length === 13 || value.length === 0

export default {
    data() {
        return { 
            id: '',
            name: '',
            username: '',
            email: '',
            phone: '',
            website: '',
        }
    },
    validations: {
		name: {
			required,
		},
		email: {
			required,
            email
		},
		phone: {
			required,
            length13
		},
	},
    methods: {

        ...mapActions([
       		'chunkUsers',
		]),

        ...mapMutations([
       		'addUser',
		]),

        send() {
            this.$v.$touch();
            if ( !this.$v.$invalid ) {
                let id = this.$store.state.users.length  + 1;
                let data = JSON.stringify({
                    id: id,
                    name: this.name,
                    username: this.username,
                    email: this.email,
                    phone: this.phone,
                    website: this.website,
                });

                fetch('https://jsonplaceholder.typicode.com/users', {
                    method: 'POST',
                    body: data,
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                })
                .then((response) => response.json())
                .then((data) => {
                    this.$store.commit('addUser', data);

                    this.$refs.form.reset();

                    this.chunkUsers();

                    this.$notify({
                        duration: 3000,
                        type: 'success',
                        text: "user added",
                    });
                });
            } else {
				this.$notify({
					duration: 3000,
					type: 'error',
					text: "Check form fields",
				});
			}
        }

    },
    mounted() {

    }
}
</script>

<style lang="sass">
    .form
        padding: 30px 0
        background: #eaeaea
        form
            max-width: 400px
            width: 100%
            margin: 0 auto
            h3
                text-align: center
                margin-bottom: 30px
</style>
