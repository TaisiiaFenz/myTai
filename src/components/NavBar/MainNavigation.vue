<template>
    <div class="navigation">
        <Logo/>
        <NavigationList/>
        <AddNewFileButton/>
    </div>
</template>

<script>
    import Logo from './Logo.vue'
    import NavigationList from "./NavigationList";
    import AddNewFileButton from "./AddNewFileButton";
    export default {
        name: "MainNavigation",
        components: {
            AddNewFileButton,
            NavigationList,
            Logo
        }
    }
</script>

<style scoped>
.navigation {
    width: 23%;
}
</style>