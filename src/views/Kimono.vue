<template>
    <h1>Kimono</h1>

    <pre>Where will you venture?</pre>
</template>

<script>

export default {
    data() {
        return {
            userInfo: {},
        };
    },
    computed: {
        userId() {
            return this.$route.params.userId;
        },
    },
    watch: {
        userId: async function (val) {
            this.userInfo = await this.fetchUserInfo(val);
        },
    },
    methods: {
        async fetchUserInfo(id) {
        return await fetch("https://jsonplaceholder.typicode.com/users/" + id)
            .then((response) => response.json())
            .then((json) => json);
        },
    },
    async created() {
        this.userInfo = await this.fetchUserInfo(this.userId);
    },
};
</script>