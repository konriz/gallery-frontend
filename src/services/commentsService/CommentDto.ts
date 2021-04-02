import { PictureDto } from "@/services/picturesService/PictureDto";

export interface CommentDto {
  id?: number;
  picture?: PictureDto;
  content?: string;
}
