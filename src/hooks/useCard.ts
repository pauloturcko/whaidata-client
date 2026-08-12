import { useLoaderContext } from "@/contexts/LoaderContext";
import { useToastContext } from "@/contexts/ToastContext";
import { createCardService } from "@/services/card-service";
import { useMutation } from "@tanstack/react-query";
import { isAxiosError } from "axios";

export function useCard() {
  const { dispatchLoader, hideLoader } = useLoaderContext();
  const { dispatchToast } = useToastContext();

  const createCard = useMutation({
    mutationFn: createCardService.createCard,
    onMutate: () => dispatchLoader(),
    onSuccess: () => {
      hideLoader();
      dispatchToast({
        type: "success",
        message: "Cartão Salvo",
      });
    },
    onError: (error) => {
      hideLoader();

      let errorMsg = "Erro ao cadastrar cartão";

      if (isAxiosError(error) && error.response?.data) {
        const resData = error.response.data;
        if (typeof resData.message === "string") {
          errorMsg = resData.message;
        } else if (typeof resData.error === "string") {
          errorMsg = resData.error;
        } else if (typeof resData.message === "object") {
          console.error("Detalhes do erro do servidor:", resData.message);
          errorMsg = "Erro interno no servidor. Verifique o console.";
        } else {
          errorMsg = error.message;
        }
      }

      dispatchToast({
        type: "error",
        message: errorMsg === "Unauthorized" ? "Unauthorized" : errorMsg,
      });
    },
  });

  return { createCard };
}
