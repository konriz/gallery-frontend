import { AxiosService } from "@/services/axios/AxiosService";
import { CommentDto } from "@/services/commentsService/CommentDto";

export class CommentsService {
  public static async getAllComments(): Promise<CommentDto[]> {
    return await AxiosService.get("comments")
      .then((result) => result.data as CommentDto[])
      .catch((error) => {
        console.error("Downloading error : " + error);
        return Promise.reject(error);
      });
  }

  public static async saveComment(commentDto: CommentDto): Promise<CommentDto> {
    return AxiosService.post("comments", commentDto)
      .then((result) => result.data as CommentDto)
      .catch((error) => {
        console.error("Downloading error : " + error);
        return Promise.reject(error);
      });
  }

  public static async removeComment(commentId: number): Promise<string> {
    return AxiosService.delete(`comments/${commentId}`)
      .then(() => "OK")
      .catch((error) => {
        console.error("Downloading error : " + error);
        return Promise.reject(error);
      });
  }
}
