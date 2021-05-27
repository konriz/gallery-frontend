<template>
  <div class="comments-list-component">
    <div class="comments-input">
      <label for="comment-input">Comment</label>
      <input id="comment-input" type="text" v-model="commentDto.content"/>
      <button @click="save">
        Save
      </button>
    </div>
    <div class="comments-list">
      <SingleComment v-for="comment in picture.commentsList" :key="comment.id" :comment="comment"
                     @deleted="remove"></SingleComment>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { PictureDto } from "@/services/picturesService/PictureDto";
import { CommentDto } from "@/services/commentsService/CommentDto";
import { CommentsService } from "@/services/commentsService/CommentsService";
import SingleComment from "@/components/pictures/comments/SingleComment.vue";

@Component({
  components: {SingleComment}
})
export default class CommentsList extends Vue {
  @Prop() picture!: PictureDto;

  private commentDto: CommentDto = {picture: this.picture, content: ""};

  private save() {
    CommentsService.saveComment(this.commentDto).then(savedComment => {
      if (!this.picture.commentsList) {
        this.picture.commentsList = [];
      }
      this.picture.commentsList.push(savedComment);
    }).catch(error => alert(error));
  }

  private remove(commentId: number) {
    if (this.picture.commentsList) {
      this.picture.commentsList = this.picture.commentsList.filter(comment => comment.id && comment.id !== commentId);
    }
  }

}
</script>
