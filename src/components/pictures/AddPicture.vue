<template>
  <div class="add-picture">
    <form @submit.prevent>
      <div>
        <label for="picture-name">Name</label>
        <input id="picture-name" type="text" v-model="pictureDto.name"/>
      </div>
      <div>
        <label for="picture-description">Description</label>
        <input id="picture-description" type="text" v-model="pictureDto.description"/>
      </div>
      <div>
        <label for="picture-url">Url</label>
        <input id="picture-url" type="text" v-model="pictureDto.pictureUrl"/>
      </div>
      <div>
        <button @click="save">
          Save
        </button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { PicturesService } from "@/services/picturesService/PicturesService";
import { PictureDto } from "@/services/picturesService/PictureDto";

@Component
export default class AddPicture extends Vue {
  private pictureDto: PictureDto = {name: "", description: "", pictureUrl: ""};

  private async save() {
    await PicturesService.savePicture(this.pictureDto).then(() => this.$emit("added")).catch(error => alert(error));
  }
}
</script>
