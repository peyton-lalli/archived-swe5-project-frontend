<template>
  <form @submit.prevent="sendFile" enctype="multipart/form-data">
    <div class="field">
      <label for="file" class="label">Upload File</label>
      <input type="file" ref="file" @change="selectFile" />
    </div>

    <div class="field">
      <button class="button is-info">Submit</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "SimpleUpload",

  data() {
    return {
      file: "",
    };
  },

  methods: {
    selectFile() {
      this.file = this.$refs.file.files[0];
    },
    sendFile() {
      const formData = new FormData();
      formData.append("file", this.file);
    },
  },
};
</script>
