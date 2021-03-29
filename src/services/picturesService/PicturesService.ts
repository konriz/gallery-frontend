import { PictureDto } from "@/services/picturesService/PictureDto";
import { AxiosService } from "@/services/axios/AxiosService";

export class PicturesService {
  public static async getAllPictures(): Promise<PictureDto[]> {
    return await AxiosService.get("pictures")
      .then((result) => result.data as PictureDto[])
      .catch((error) => {
        console.error("Downloading error : " + error);
        return Promise.reject(error);
      });
  }

  public static async savePicture(pictureDto: PictureDto): Promise<PictureDto> {
    return AxiosService.post("pictures", pictureDto).then((result) => result.data as PictureDto)
      .catch((error) => {
        console.error("Downloading error : " + error);
        return Promise.reject(error);
      });
  }

  public static async removePicture(pictureId: number): Promise<string> {
    return AxiosService.delete(`pictures/${pictureId}`).then(() => "OK")
      .catch((error) => {
        console.error("Downloading error : " + error);
        return Promise.reject(error);
      });
  }
}
