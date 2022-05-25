<template>
    <div v-if="user">
        <div class="wrapper">
            <div class="user__container">
                <img width="320" src="https://www.fillmurray.com/320/427" alt="Avatar">
                <div class="user__description">
                    <div class="user__description-row">
                        <div class="user__description-title">
                            Name:
                        </div>
                        <div class="user__description-info">
                            <p v-if="!isEditingName">{{ user.name }}</p>
                            <input v-else type="text" v-model="nameNew" placeholder="New name">
                        </div>
                        <div class="user__description-edit">
                            <svg v-if="!isEditingName" @click="isEditingName = !isEditingName" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                width="16px" viewBox="0 0 494.936 494.936" style="enable-background:new 0 0 494.936 494.936;"
                                xml:space="preserve">
                                <path d="M389.844,182.85c-6.743,0-12.21,5.467-12.21,12.21v222.968c0,23.562-19.174,42.735-42.736,42.735H67.157
                                    c-23.562,0-42.736-19.174-42.736-42.735V150.285c0-23.562,19.174-42.735,42.736-42.735h267.741c6.743,0,12.21-5.467,12.21-12.21
                                    s-5.467-12.21-12.21-12.21H67.157C30.126,83.13,0,113.255,0,150.285v267.743c0,37.029,30.126,67.155,67.157,67.155h267.741
                                    c37.03,0,67.156-30.126,67.156-67.155V195.061C402.054,188.318,396.587,182.85,389.844,182.85z"/>
                                <path d="M483.876,20.791c-14.72-14.72-38.669-14.714-53.377,0L221.352,229.944c-0.28,0.28-3.434,3.559-4.251,5.396l-28.963,65.069
                                    c-2.057,4.619-1.056,10.027,2.521,13.6c2.337,2.336,5.461,3.576,8.639,3.576c1.675,0,3.362-0.346,4.96-1.057l65.07-28.963
                                    c1.83-0.815,5.114-3.97,5.396-4.25L483.876,74.169c7.131-7.131,11.06-16.61,11.06-26.692
                                    C494.936,37.396,491.007,27.915,483.876,20.791z M466.61,56.897L257.457,266.05c-0.035,0.036-0.055,0.078-0.089,0.107
                                    l-33.989,15.131L238.51,247.3c0.03-0.036,0.071-0.055,0.107-0.09L447.765,38.058c5.038-5.039,13.819-5.033,18.846,0.005
                                    c2.518,2.51,3.905,5.855,3.905,9.414C470.516,51.036,469.127,54.38,466.61,56.897z"/>
                            </svg>
                            <template v-else>
                                <div class="done" @click="isEditingName = !isEditingName; save('name', nameNew)"></div>
                                <div class="close" @click="isEditingName = !isEditingName; nameNew = '';"></div>
                            </template>
                        </div>
                    </div>
                    <div class="user__description-row">
                        <div class="user__description-title">
                            Website:
                        </div>
                        <div class="user__description-info">
                            <p v-if="!isEditingWebsite">{{ user.website }}</p>
                            <input v-else type="text" v-model="websiteNew" placeholder="New website">
                        </div>
                        <div class="user__description-edit">
                            <svg v-if="!isEditingWebsite" @click="isEditingWebsite = !isEditingWebsite" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                width="16px" viewBox="0 0 494.936 494.936" style="enable-background:new 0 0 494.936 494.936;"
                                xml:space="preserve">
                                <path d="M389.844,182.85c-6.743,0-12.21,5.467-12.21,12.21v222.968c0,23.562-19.174,42.735-42.736,42.735H67.157
                                    c-23.562,0-42.736-19.174-42.736-42.735V150.285c0-23.562,19.174-42.735,42.736-42.735h267.741c6.743,0,12.21-5.467,12.21-12.21
                                    s-5.467-12.21-12.21-12.21H67.157C30.126,83.13,0,113.255,0,150.285v267.743c0,37.029,30.126,67.155,67.157,67.155h267.741
                                    c37.03,0,67.156-30.126,67.156-67.155V195.061C402.054,188.318,396.587,182.85,389.844,182.85z"/>
                                <path d="M483.876,20.791c-14.72-14.72-38.669-14.714-53.377,0L221.352,229.944c-0.28,0.28-3.434,3.559-4.251,5.396l-28.963,65.069
                                    c-2.057,4.619-1.056,10.027,2.521,13.6c2.337,2.336,5.461,3.576,8.639,3.576c1.675,0,3.362-0.346,4.96-1.057l65.07-28.963
                                    c1.83-0.815,5.114-3.97,5.396-4.25L483.876,74.169c7.131-7.131,11.06-16.61,11.06-26.692
                                    C494.936,37.396,491.007,27.915,483.876,20.791z M466.61,56.897L257.457,266.05c-0.035,0.036-0.055,0.078-0.089,0.107
                                    l-33.989,15.131L238.51,247.3c0.03-0.036,0.071-0.055,0.107-0.09L447.765,38.058c5.038-5.039,13.819-5.033,18.846,0.005
                                    c2.518,2.51,3.905,5.855,3.905,9.414C470.516,51.036,469.127,54.38,466.61,56.897z"/>
                            </svg>
                            <template v-else>
                                <div class="done" @click="isEditingWebsite = !isEditingWebsite; save('website', websiteNew)"></div>
                                <div class="close" @click="isEditingWebsite = !isEditingWebsite; websiteNew = '';"></div>
                            </template>
                        </div>
                    </div>
                    <div class="user__description-row">
                        <div class="user__description-title">
                            Phone:
                        </div>
                        <div class="user__description-info">
                            <p v-if="!isEditingPhone">{{user.phone}}</p>
                            <input v-else type="tel" v-model="phoneNew" placeholder="New phone">
                        </div>
                        <div class="user__description-edit">
                            <svg v-if="!isEditingPhone" @click="isEditingPhone = !isEditingPhone" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                width="16px" viewBox="0 0 494.936 494.936" style="enable-background:new 0 0 494.936 494.936;"
                                xml:space="preserve">
                                <path d="M389.844,182.85c-6.743,0-12.21,5.467-12.21,12.21v222.968c0,23.562-19.174,42.735-42.736,42.735H67.157
                                    c-23.562,0-42.736-19.174-42.736-42.735V150.285c0-23.562,19.174-42.735,42.736-42.735h267.741c6.743,0,12.21-5.467,12.21-12.21
                                    s-5.467-12.21-12.21-12.21H67.157C30.126,83.13,0,113.255,0,150.285v267.743c0,37.029,30.126,67.155,67.157,67.155h267.741
                                    c37.03,0,67.156-30.126,67.156-67.155V195.061C402.054,188.318,396.587,182.85,389.844,182.85z"/>
                                <path d="M483.876,20.791c-14.72-14.72-38.669-14.714-53.377,0L221.352,229.944c-0.28,0.28-3.434,3.559-4.251,5.396l-28.963,65.069
                                    c-2.057,4.619-1.056,10.027,2.521,13.6c2.337,2.336,5.461,3.576,8.639,3.576c1.675,0,3.362-0.346,4.96-1.057l65.07-28.963
                                    c1.83-0.815,5.114-3.97,5.396-4.25L483.876,74.169c7.131-7.131,11.06-16.61,11.06-26.692
                                    C494.936,37.396,491.007,27.915,483.876,20.791z M466.61,56.897L257.457,266.05c-0.035,0.036-0.055,0.078-0.089,0.107
                                    l-33.989,15.131L238.51,247.3c0.03-0.036,0.071-0.055,0.107-0.09L447.765,38.058c5.038-5.039,13.819-5.033,18.846,0.005
                                    c2.518,2.51,3.905,5.855,3.905,9.414C470.516,51.036,469.127,54.38,466.61,56.897z"/>
                            </svg>
                            <template v-else>
                                <div class="done" @click="isEditingPhone = !isEditingPhone; save('phone', phoneNew)"></div>
                                <div class="close" @click="isEditingPhone = !isEditingPhone; phoneNew = '';"></div>
                            </template>
                        </div>
                    </div>
                    <div class="user__description-row" v-if="user.company != undefined">
                        <div class="user__description-title">
                            Company:
                        </div>
                        <div class="user__description-info p-right">
                            {{user.company.name }}
                        </div>
                    </div>
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
            nameNew: '',
            websiteNew: '',
            phoneNew: '',
            isEditingName: false,
            isEditingWebsite: false,
            isEditingPhone: false,
        }
    },
    methods: {
        ...mapMutations([
       		'updateUsers',
		]),

        getData() {
            if ( this.$store.state.users == null ) {
                console.error('users store empty');
                fetch(`https://jsonplaceholder.typicode.com/users`)
                    .then((response) => response.json())
                    .then((json) => {
                        this.$store.commit('updateUsers', json);
                        let data = this.$store.state.users.filter(item => item.id == this.$route.params.id);
                        this.user = data[0];
                    });
            } else {
                let data = this.$store.state.users.filter(item => item.id == this.$route.params.id);
                this.user = data[0];
            }
    
        },

        save(field, data) {
            if ( data == '' ) return false;

            let newUsers = structuredClone(this.$store.state.users);
            newUsers.forEach(item => {
                if (item.id == this.$route.params.id) {
                    item[field] = data;
                }
            });
            this.$store.commit('updateUsers', newUsers);
            this.getData();
        }
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
            width: calc(100% - 320px - 120px)
            &-row
                display: flex
                align-items: center
                justify-content: space-between
                margin-bottom: 15px
                &:first-of-type
                    .user__description-info
                        font-size: 24px
                        line-height: 100%
                        font-weight: bold
            &-title
                width: 100px
            &-info
                width: calc( 100% - 100px - 37px )
                text-align: right
                padding-right: 10px
                input
                    padding: 5px
                    font-weight: normal !important
            &-edit
                width: 37px
                display: flex
                align-items: center
                justify-content: center
                svg
                    cursor: pointer
                    &:hover
                        fill: #ffb4b4
            .p-right
                padding-right: 26px
    .close
        width: 16px
        height: 16px
        opacity: 0.5
        position: relative
        cursor: pointer
        &:hover
            opacity: 1
        &:before, &:after
            position: absolute
            left: 8px
            content: ' '
            height: 17px
            width: 2px
            background-color: #333

        &:before
            transform: rotate(45deg)

        &:after
            transform: rotate(-45deg)
    .done
        width: 16px
        height: 16px
        opacity: 0.5
        position: relative
        cursor: pointer
        margin-right: 5px
        &:before, &:after
            position: absolute
            left: 8px
            content: ' '
            height: 17px
            width: 2px
            background-color: #20ff20
        &:hover
            opacity: 1
            &:before, &:after
                background-color: #20ff20
        &:after
            height: 8px
            bottom: 0
            left: 0
        &:before
            transform: rotate(45deg)

        &:after
            transform: rotate(-45deg)
</style>
