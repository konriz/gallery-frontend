import { VoteDto } from "@/services/votesService/VoteDto";

export interface PictureDto {
  id?: number;
  pictureUrl: string;
  name: string;
  description: string;
  votesList?: VoteDto[];
}
