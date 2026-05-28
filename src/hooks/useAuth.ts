import { useMutation, useQueryClient } from "@tanstack/react-query";
import { authService, loginService } from "@/services/auth-service";
import { useToastContext } from "@/contexts/ToastContext";
import { useLoaderContext } from "@/contexts/LoaderContext";
import { isAxiosError } from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export function useAuth() {
  const { dispatchToast } = useToastContext();
  const { dispatchLoader, hideLoader } = useLoaderContext();
  const router = useRouter();
  const queryClient = useQueryClient();

  const login = useMutation({
    mutationFn: loginService.login,
    onMutate: () => dispatchLoader(),
    onSuccess: () => {
      hideLoader();
    },
    onError: (error) => {
      hideLoader();

      let errorMsg = "Erro ao fazer login";

      if (isAxiosError(error) && error.response?.data) {
        errorMsg =
          error.response.data.message ||
          error.response.data.error ||
          error.message;
      }

      dispatchToast({
        type: "error",
        message: errorMsg,
      });
    },
  });

  const createAccount = useMutation({
    mutationFn: authService.createAccount,
    onMutate: () => dispatchLoader(),
    onSuccess: () => {
      hideLoader();
      dispatchToast({
        type: "success",
        message: "Conta criada com sucesso!",
      });
    },
    onError: (error) => {
      hideLoader();

      let errorMsg = "Erro ao criar sua conta";

      if (isAxiosError(error) && error.response?.data) {
        errorMsg =
          error.response.data.message ||
          error.response.data.error ||
          error.message;
      }

      dispatchToast({
        type: "error",
        message: errorMsg,
      });
    },
  });

  const logout = () => {
    Cookies.remove("whaidata.token");
    queryClient.clear();
    router.push("/login");
  };

  return { createAccount, login, logout };
}
