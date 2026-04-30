import { useMutation } from "@tanstack/react-query";
import { authService } from "@/services/auth-service";
import { useToastContext } from "@/contexts/ToastContext";
import { useLoaderContext } from "@/contexts/LoaderContext";

export function useAuth() {
  const { dispatchToast } = useToastContext();
  const { dispatchLoader, hideLoader } = useLoaderContext();

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
      dispatchToast({
        type: "error",
        message: error.message ?? "Erro ao criar sua conta",
      });
    },
  });

  return { createAccount };
}
