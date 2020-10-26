<template>
    <div class="main">
        <SearchInput/>
        <MainNavigation/>
    </div>
</template>

<script>
    import SearchInput from './Search/SearchInput.vue'
    import MainNavigation from './NavBar/MainNavigation.vue'

    export default {
        name: "MainPage",
        components: {
            SearchInput,
            MainNavigation
        },
        props: {}
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .main {
        padding-top: 10px;
    }
    h3 {
        margin: 40px;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
</style>