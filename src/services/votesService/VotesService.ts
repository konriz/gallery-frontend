import { AxiosService } from "@/services/axios/AxiosService";
import { VoteDto } from "@/services/votesService/VoteDto";

export class VotesService {
  public static async getAllVotes(): Promise<VoteDto[]> {
    return await AxiosService.get("votes")
      .then((result) => result.data as VoteDto[])
      .catch((error) => {
        console.error("Downloading error : " + error);
        return Promise.reject(error);
      });
  }

  public static async saveVote(voteDto: VoteDto): Promise<VoteDto> {
    return AxiosService.post("votes", voteDto)
      .then((result) => result.data as VoteDto)
      .catch((error) => {
        console.error("Downloading error : " + error);
        return Promise.reject(error);
      });
  }

  public static async removeVote(voteId: number): Promise<string> {
    return AxiosService.delete(`votes/${voteId}`)
      .then(() => "OK")
      .catch((error) => {
        console.error("Downloading error : " + error);
        return Promise.reject(error);
      });
  }
}
