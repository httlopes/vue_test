<template>
    <div class="twoot-item" @click="favouriteTwoot(twoot.id)">
        <div class="user-profile__twoot">
            <div class="twoot-item__user">
                @{{ username }}
            </div>
            <div class="twoot-item__content">
                {{ twoot.content }}
            </div>
        </div>
    </div>
</template>

<script>
//import { reactive } from 'vue';
export default {
    name: "TwootItem",
    props: {
        username: {
            type: String,
            required: true
        },
        twoot: {
            type: Object,
            required: true
        }
    },
    setup(props, ctx) {
        //const state = reactive({})

        function favouriteTwoot(id) {
            ctx.emit('favourite', id);
        }

        return {
            favouriteTwoot
        }
    }

    //old method
    // methods: {
    //     favouriteTwoot(id) {
    //         this.$emit('favourite', id);
    //     }
    // }
}
</script>

<style lang="scss" scoped>
//for scss install 2 npm dependecies::  node-sass  && sass-loader
.twoot-item {
    padding: 20px;
    background-color: white;
    border-radius: 5px;
    border: 1px solid #dfe3e8;
    box-sizing: border-box;
    cursor: pointer;
    transition: all 0.25s ease;

    //.twoot-item:hover {
    &:hover {  //can do this because we are using scss
        transform: scale(1.1, 1.1);
    }

    .twoot-item__user {
        font-weight: bold;
    }
}

</style>