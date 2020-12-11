<template>
    <div class="user-profile">
        <div class="user-profile__user-panel">
            <h1 class="user-profile__username">@{{ state.user.username }}</h1>
            <h2>{{ userId }}</h2>
            <div class="user-profile__admin-badge" v-if="state.user.isAdmin">
                Admin
            </div>
            <div class="user-profile__follower-count">
                <strong>Followers:</strong> {{ state.followers }}
            </div>
            <CreateTwootPanel @add-twoot="addTwoot"/>
        </div>
        <div class="user-profile__twoots-wrapper">
            <TwootItem
              v-for="twoot in state.user.twoots"
              :key="twoot.id"
              :username="state.user.username"
              :twoot="twoot"
              @favourite="toogleFavourite" 
            />
        </div>
    </div>
</template>

<script>
import TwootItem from "../components/TwootItem";
import { useRoute } from 'vue-router';
import { users } from "../assets/users";
import CreateTwootPanel from "../components/CreateTwootPanel";
import { reactive, computed } from 'vue';

export default {
    name: "UserProfile",
    components: { CreateTwootPanel, TwootItem },
    setup() {
        const route = useRoute();
        const userId = computed(() => route.params.userId);

        const state = reactive({
            followers: 0,
            user: users[userId.value - 1] || users[0]
        })

        function addTwoot(twoot) {
            state.user.twoots.unshift({
                id: state.user.twoots.length + 1,
                content: twoot
            });
        }

        return {
            state,
            addTwoot,
            userId
        }
    }


    // data() {
    //     return {
    //         followers: 0,
    //         user: {
    //             id: 1,
    //             username: '_Helder',
    //             firstName: 'Helder',
    //             lastName: 'Lopes',
    //             email: 'hl@gmail.com',
    //             isAdmin: true,
    //             twoots: [
    //                 {id: 1, content: 'Twotter is amazing!'},
    //                 {id: 2, content: 'Second twotter'}
    //             ]
    //         }
    //     }
    // },
    // watch: {
    //     //good to do trigger some actions when sometinh changed, eg if isAdmin flag change, give access to something that is hidden or something else
    //     // followers(newFollowerCount, oldFollowerCount) {
    //     //     if (oldFollowerCount < newFollowerCount) {
    //     //         console.log(`${this.user.username} as gained a follower`);
    //     //     }
    //     //}
    // },
    // methods: {
    //     addTwoot(twoot) {
    //         this.user.twoots.unshift({
    //             id: this.user.twoots.length + 1,
    //             content: twoot
    //         })
    //     }
    //     // followUser() {
    //     //     this.followers++;
    //     // },
    //     // toogleFavourite(id) {
    //     //     console.log(`Favourted tweet #${id}`)
    //     // }
    // },
    // mounted() { 
    //     //life cycle hooks is what this is called, there few ones, created, mounted, unmounted, etc... google and see the differences
    //     //this is triggered when component loads
    //     //good to load API info here to display on page
    //     //this.followUser();
    // }
}
</script>

<style lang="scss" scoped>
.user-profile {
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-gap: 50px;
    padding: 50px 5%;

    .user-profile__user-panel {
        display: flex;
        flex-direction:  column;
        padding: 20px;
        background-color: white;
        border-radius: 5px;
        border: 1px sold #d3e3e8;
        margin-bottom: auto;

         h1 {
            margin: 0;
        }

        .user-profile__admin-badge {
            background-color: rebeccapurple;
            color: white;
            border-radius: 5px;
            margin-right: auto;
            padding:  0 10px;
            font-weight: bold;
        }
    }

    .user-profile__twoots-wrapper {
        display: grid;
        grid-gap: 10px;
        margin-bottom: auto;
    }
}
</style>