import { AxiosService } from "@/services/axios/AxiosService";
import { NewUserDto } from "@/services/registerService/NewUserDto";

export class RegisterService {
  public static async registerUser(
    newUserDto: NewUserDto
  ): Promise<NewUserDto> {
    return AxiosService.post("register", newUserDto)
      .then((result) => result.data as NewUserDto)
      .catch((error) => {
        console.error("Downloading error : " + error);
        return Promise.reject(error);
      });
  }
}
