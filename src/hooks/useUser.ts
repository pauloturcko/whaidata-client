import Cookies from "js-cookie";
import { useQuery } from "@tanstack/react-query";
import { userService } from "@/services/auth-service";

export const useUser = () => {
  const token = Cookies.get("whaidata.token");

  const query = useQuery({
    queryKey: ["user", "me"],
    queryFn: userService.getLoggedUserData,
    enabled: !!token,
    retry: 1,
  });

  return {
    user: query.data,
    isLoading: query.isLoading,
    isError: query.isError,
  };
};
