<template>
    <div class="user-profile">
        <div class="user-profile__user-panel">
            <h1 class="user-profile__username">@{{ user.username }}</h1>
            <div class="user-profile__admin-badge" v-if="user.isAdmin">
                Admin
            </div>
            <div class="user-profile__follower-count">
                <strong>Followers:</strong> {{ followers }}
            </div>
            <form class="user-profile__create-twoot" @submit.prevent="createNewTwoot" :class="{'--exceeded' : newTwootCharacterCount > 180}">
                <label for="newTwoot"><strong>New Twoot</strong> ({{ newTwootCharacterCount }}/180)</label>
                <textarea id="mewTwoot" rows="4" v-model="newTwootContent" />
                <div class="user-profile__create-twoot-type">
                    <label for="newTwootType"><strong>Type</strong></label>
                    <select id="newTwootType" v-model="selectedTwootType">
                        <option :value="option.value" v-for="(option, index) in twootTypes" :key="index">
                            {{ option.name }}
                        </option>
                    </select>
                </div>
                <button>
                    Twoot!
                </button>
            </form>
        </div>
        <div class="user-profile__twoots-wrapper">
            <TwootItem
              v-for="twoot in user.twoots"
              :key="twoot.id"
              :username="user.username"
              :twoot="twoot"
              @favourite="toogleFavourite" 
            />
        </div>
    </div>
</template>

<script>
import TwootItem from "./TwootItem";

export default {
    name: "UserProfile",
    components: { TwootItem },
    data() {
        return {
            newTwootContent: '', //v-model to save into here
            selectedTwootType: 'instant', //eg of initialize by default as this is synced with dropdown
            twootTypes: [
                {value: 'draft', name: 'Draft'},
                {value: 'instant', name: 'Instant Twoot'},
            ],
            followers: 0,
            user: {
                id: 1,
                username: '_Helder',
                firstName: 'Helder',
                lastName: 'Lopes',
                email: 'hl@gmail.com',
                isAdmin: true,
                twoots: [
                    {id: 1, content: 'Twotter is amazing!'},
                    {id: 2, content: 'Second twotter'}
                ]
            }
        }
    },
    watch: {
        //good to do trigger some actions when sometinh changed, eg if isAdmin flag change, give access to something that is hidden or something else
        followers(newFollowerCount, oldFollowerCount) {
            if (oldFollowerCount < newFollowerCount) {
                console.log(`${this.user.username} as gained a follower`);
            }
        }
    },
    computed: {
        newTwootCharacterCount() {
            return this.newTwootContent.length;
        }
        // fullName() {
        //     return `${this.user.firstName} ${this.user.lastName}`;
        //     //this.user.firstName + ' ' + this.user.lastName #this is the same thing
        // }
    },
    methods: {
        followUser() {
            this.followers++;
        },
        toogleFavourite(id) {
            console.log(`Favourted tweet #${id}`)
        },
        createNewTwoot() {
            if (this.newTwootContent && this.selectedTwootType !== "draft") {
                this.user.twoots.unshift({
                    id: this.user.twoots.lenght + 1,
                    content: this.newTwootContent
                });

                this.newTwootContent = '';
            }
        }
    },
    mounted() { 
        //life cycle hooks is what this is called, there few ones, created, mounted, unmounted, etc... google and see the differences
        //this is triggered when component loads
        //good to load API info here to display on page
        this.followUser();
    }
}
</script>

<style lang="scss" scoped>
.user-profile {
    display: grid;
    grid-template-columns: 1fr 3fr;
    width: 100%;
    padding: 50px 5%;

    .user-profile__user-panel {
        display: flex;
        flex-direction:  column;
        margin-right: 50px;
        padding: 20px;
        background-color: white;
        border-radius: 5px;
        border: 1px sold #d3e3e8;

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

        .user-profile__create-twoot {
            padding-top: 20px;;
            display: flex;
            flex-direction: column;

            &.--exceeded {
                border: red;
                color: red;

                button {
                    background-color: red;
                    border: none;
                    color: white;
                }
            }
        }
    }

    .user-profile__twoots-wrapper {
        display: grid;
        grid-gap: 10px;
    }
}
</style>