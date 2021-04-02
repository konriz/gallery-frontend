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
    <div class="picture-votes">
      <button @click="vote(1)">Upvote ({{ upvotes }})</button>
      <button @click="vote(-1)">Downvote ({{ downvotes }})</button>
    </div>
    <CommentsComponent :picture="picture"></CommentsComponent>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { PictureDto } from "@/services/picturesService/PictureDto";
import { PicturesService } from "@/services/picturesService/PicturesService";
import { VoteDto } from "@/services/votesService/VoteDto";
import { VotesService } from "@/services/votesService/VotesService";
import CommentsComponent from "@/components/pictures/comments/CommentsList.vue";

@Component({
  components: {CommentsComponent}
})
export default class Picture extends Vue {
  @Prop() picture!: PictureDto;

  private async remove() {
    if (this.picture.id) {
      PicturesService.removePicture(this.picture.id).then(() => this.$emit("deleted")).catch((error) => alert(error));
    }
  }

  get upvotes(): number {
    return this.picture.votesList?.filter(vote => vote && vote.value > 0).length || 0;
  }

  get downvotes(): number {
    return this.picture.votesList?.filter(vote => vote && vote.value < 0).length || 0;
  }

  private vote(value: number) {
    const voteDto: VoteDto = {value, picture: this.picture};
    VotesService.saveVote(voteDto).then((savedVote) => {
      if (!this.picture.votesList) {
        this.picture.votesList = []
      }
      this.picture.votesList.push(savedVote);
    }).catch(error => alert(error))
  }

}
</script>
