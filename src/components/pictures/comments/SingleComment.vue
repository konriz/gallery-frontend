<template>
  <div class="comment">
    <div class="comment-content">{{ comment.content }}</div>
    <div class="comment-delete">
      <button @click="remove">Delete</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { CommentDto } from "@/services/commentsService/CommentDto";
import { CommentsService } from "@/services/commentsService/CommentsService";

@Component
export default class SingleComment extends Vue {
  @Prop() comment!: CommentDto;

  private async remove() {
    if (this.comment.id) {
      CommentsService.removeComment(this.comment.id).then(() => this.$emit("deleted", this.comment.id))
          .catch((error) => alert(error));
    }
  }
}
</script>
