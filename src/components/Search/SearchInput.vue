<template>
    <div class="input">
        <input v-model="inputValue" placeholder="отредактируй меня">
        <button>Search</button>
        <p>Введённое сообщение: {{ inputValue }}</p>
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
    position: absolute;
    right: 0;
    width: 77%;
    height: 30px;
    padding: 0 10px;
}
    input {
        width: 80%;
        height: inherit;
    }
    button {
        width: 10%;
        height: 36px;
    }
</style>