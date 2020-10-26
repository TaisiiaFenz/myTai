<template>
    <div class="files">
        <FileCard v-for="file in files"
                  :key="file.id"
                  :name="file.name"
                  :iconSrc="file.iconSrc"
                  :imgSrc="file.imgSrc"
        >
            {{ file.name }}
        </FileCard>
    </div>
</template>

<script>
    import FileCard from "./FileCard";
    export default {
        name: "Files",
        data: function() {
            return {
                files: [
                    {
                        iconSrc: '',
                        imgSrc: '',
                        name: 'Lorem',
                        id: 1
                    },
                    {
                        iconSrc: '',
                        imgSrc: '',
                        name: 'ipsum',
                        id: 2
                    },
                    {
                        iconSrc: '',
                        imgSrc: '',
                        name: 'dolar',
                        id: 3
                    }
                ]
            }
        },
        components: {
            FileCard
        }
    }
</script>

<style scoped>
.files {
    display: grid;
    padding-top: 50px;
    /*grid-template-columns: 260px 260px 260px;*/
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 5em;
}
</style>