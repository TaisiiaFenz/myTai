<template>
    <form id="upload-container" method="POST">
        <img id="upload-image" src="upload.svg">
        <div>
            <input id="file-input" type="file" name="file" multiple onchange="upLoadFile">
            <label for="file-input">Choose file</label>
<!--            <span>или перетащите его сюда</span> &ndash;&gt;-->
        </div>
    </form>
</template>

<script>
    export default {
        name: "UpLoadFile",
        methods: {
            sendFiles: function(files) {
                let maxFileSize = 5242880;
                let Data = new FormData();
                files.forEach((file) => {
                    if ((file.size <= maxFileSize) && ((file.type == 'image/png') || (file.type == 'image/jpeg'))) {
                        Data.append('images[]', file);
                    }
                });
            },
            upLoadFile: function() {
                let files = this.files;
                this.sendFiles(files);
            }
        }

        // $.ajax({
        //     url: dropZone.attr('action'),
        //     type: dropZone.attr('method'),
        //     data: Data,
        //     contentType: false,
        //     processData: false,
        //     success: function(data) {
        //         alert ('Файлы были успешно загружены!');
        //     }
        // });
    }
</script>

<style scoped>
    #upload-container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 200px;
        height: 200px;
        outline: 2px dashed #5d5d5d;
        outline-offset: -12px;
        background-color: #e0f2f7;
        font-family: 'Segoe UI';
        color: #1f3c44;
    }

    #upload-container img {
        width: 40%;
        margin-bottom: 20px;
        user-select: none;
    }

    #upload-container label {
        font-weight: bold;
    }

    #upload-container label:hover {
        cursor: pointer;
        text-decoration: underline;
    }

    #upload-container div {
        position: relative;
        z-index: 10;
    }

    #upload-container input[type=file] {
        width: 0.1px;
        height: 0.1px;
        opacity: 0;
        position: absolute;
        z-index: -10;
    }

    #upload-container label.focus {
        outline: 1px solid #0078d7;
        outline: -webkit-focus-ring-color auto 5px;
    }

    #upload-container.dragover {
        background-color: #fafafa;
        outline-offset: -17px;
    }
</style>