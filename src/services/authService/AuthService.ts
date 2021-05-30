import { CredentialsDTO } from "@/services/authService/CredentialsDTO";
import { AxiosService } from "@/services/axios/AxiosService";
import { UserDTO } from "@/services/authService/UserDTO";

export class AuthService {
  static async login(credentials: CredentialsDTO): Promise<UserDTO> {
    return AxiosService.post("auth/login", credentials)
      .then((response) => response.data as UserDTO)
      .catch((error) => {
        console.error("Logging in error : " + error);
        return Promise.reject(error);
      });
  }
}
