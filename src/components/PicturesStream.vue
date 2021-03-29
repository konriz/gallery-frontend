<template>
  <div class="stream-view">
    <div v-if="pictures.length === 0">No images to show</div>
    <div>
      <button @click="downloadPictures">Refresh</button>
    </div>
    <AddPicture @added="downloadPictures"></AddPicture>
    <Picture
        v-for="picture of pictures"
        :key="picture.id"
        :picture="picture"
        @deleted="downloadPictures"
    ></Picture>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { PictureDto } from "@/services/picturesService/PictureDto";
import Picture from "@/components/Picture.vue";
import { PicturesService } from "@/services/picturesService/PicturesService";
import AddPicture from "@/components/AddPicture.vue";

@Component({
  components: {Picture, AddPicture}
})
export default class PicturesStream extends Vue {
  private pictures: PictureDto[] = [];

  created() {
    this.downloadPictures();
  }

  private async downloadPictures() {
    console.log("Downloading");
    this.pictures = [];
    this.pictures = await PicturesService.getAllPictures().catch(error => {
      alert(error);
      return [];
    });
  }
}
</script>

