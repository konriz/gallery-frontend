<template>
  <div class="home">
    <PicturesStream></PicturesStream>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PicturesStream from "@/components/pictures/PicturesStream.vue";

@Component({
  components: {
    PicturesStream
  },
})
export default class Home extends Vue {
}
</script>
