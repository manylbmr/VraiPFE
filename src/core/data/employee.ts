// import { getAssetPath } from "@/core/helpers/assets";
import ApiService from "../services/ApiService";

ApiService.setHeader();

export function fetchMe(): Promise<any> {
  return ApiService.post("Employee/GetMe", {}).then((response) => {
    return response.data;
  });
}

// export type { ICustomer };