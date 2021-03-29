<template>
  <div class="picture">
    <div class="picture-container">
      <img :src="picture.pictureUrl" :alt="picture.name"/>
    </div>
    <div class="picture-description">
      <span> {{ picture.name }} </span>
      <span> {{ picture.description }} </span>
      <button @click="remove">Delete</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { PictureDto } from "@/services/picturesService/PictureDto";
import { PicturesService } from "@/services/picturesService/PicturesService";

@Component
export default class Picture extends Vue {
  @Prop() picture!: PictureDto;

  private async remove() {
    if (this.picture.id) {
      PicturesService.removePicture(this.picture.id).then(() => this.$emit("deleted")).catch((error) => alert(error));
    }
  }

}
</script>
