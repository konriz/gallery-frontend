import { VoteDto } from "@/services/votesService/VoteDto";
import { CommentDto } from "@/services/commentsService/CommentDto";

export interface PictureDto {
  id?: number;
  pictureUrl: string;
  name: string;
  description: string;
  votesList?: VoteDto[];
  commentsList?: CommentDto[];
}
