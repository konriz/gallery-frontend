import { PictureDto } from "@/services/picturesService/PictureDto";

export interface VoteDto {
  id?: number;
  picture?: PictureDto;
  value?: number;
}
