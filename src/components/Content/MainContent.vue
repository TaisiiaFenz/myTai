<template>
    <div class="main">
        <SearchInput/>
        <Folders/>
        <Files/>
    </div>
</template>

<script>

    import SearchInput from "./Search/SearchInput";
    import Folders from "../../views/Folders";
    import Files from "../../views/Files";
    export default {
        name: "MainContent",
        components: {
            Files,
            Folders,
            SearchInput
        }
    }
</script>

<style scoped>
.main {
    position: absolute;
    right: 5%;
    width: 77%;
}
</style>