<template>
  <div class="home">
    <Header></Header>
    <ImagesStream></ImagesStream>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PicturesStream from "@/components/PicturesStream.vue";
import Header from "@/components/Header.vue";

@Component({
  components: {
    Header, ImagesStream: PicturesStream
  },
})
export default class Home extends Vue {
}
</script>
