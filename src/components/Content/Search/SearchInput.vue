<template>
    <div class="input">
        <input v-model="inputValue" placeholder="отредактируй меня">
        <button>Search</button>
<!--        <p>Введённое сообщение: {{ inputValue }}</p>-->
    </div>
</template>

<script>
    export default {
        name: "SearchInput",
        data: function() {
            return {
                inputValue: ''
            }
        }
    }
</script>

<style scoped>
    .input {
        display: flex;
        height: 30px;
        padding-bottom: 50px;
    }
    input {
        flex-basis: 80%;
        display: block;
        height: inherit;
    }
    button {
        flex: 1;
        height: 36px;
    }
</style>