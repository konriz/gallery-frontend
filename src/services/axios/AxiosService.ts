import Vue from "vue";
import { AxiosResponse } from "axios";

export class AxiosService {
  private static appUrl = "http://localhost:3000";

  public static async get(endpoint: string): Promise<AxiosResponse<unknown>> {
    return Vue.axios.get(`${this.appUrl}/${endpoint}`);
  }

  public static post(endpoint: string, data: unknown): Promise<AxiosResponse<unknown>> {
    return Vue.axios.post(`${this.appUrl}/${endpoint}`, data);
  }

  public static put(endpoint: string, data: unknown): Promise<AxiosResponse<unknown>> {
    return Vue.axios.put(`${this.appUrl}/${endpoint}`, data);
  }

  public static delete(endpoint: string): Promise<AxiosResponse<unknown>> {
    return Vue.axios.delete(`${this.appUrl}/${endpoint}`);
  }
}
