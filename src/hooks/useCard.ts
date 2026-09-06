import { useLoaderContext } from "@/contexts/LoaderContext";
import { useToastContext } from "@/contexts/ToastContext";
import {
  createCardService,
  deleteCardService,
  loadCardsService,
  updateCardService,
} from "@/services/card-service";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { isAxiosError } from "axios";

const CARDS_QUERY_KEY = ["Settings-LoadAllCards"];

const getErrorMessage = (error: unknown, fallback: string): string => {
  if (isAxiosError(error) && error.response?.data) {
    const resData = error.response.data;
    if (typeof resData.message === "string") {
      return resData.message;
    }
    if (typeof resData.error === "string") {
      return resData.error;
    }
    if (typeof resData.message === "object") {
      console.error("Detalhes do erro do servidor:", resData.message);
      return "Erro interno no servidor. Verifique o console.";
    }
    return error.message;
  }
  return fallback;
};

export function useCard() {
  const { dispatchLoader, hideLoader } = useLoaderContext();
  const { dispatchToast } = useToastContext();
  const queryClient = useQueryClient();

  const createCard = useMutation({
    mutationFn: createCardService.createCard,
    onMutate: () => dispatchLoader(),
    onSuccess: () => {
      hideLoader();
      dispatchToast({
        type: "success",
        message: "Cartão Salvo",
      });
      queryClient.invalidateQueries({ queryKey: CARDS_QUERY_KEY });
    },
    onError: (error) => {
      hideLoader();
      dispatchToast({
        type: "error",
        message: getErrorMessage(error, "Erro ao cadastrar cartão"),
      });
    },
  });

  const deleteCard = useMutation({
    mutationFn: deleteCardService.deleteCard,
    onMutate: () => dispatchLoader(),
    onSuccess: () => {
      hideLoader();
      dispatchToast({
        type: "success",
        message: "Cartão excluído",
      });
      queryClient.invalidateQueries({ queryKey: CARDS_QUERY_KEY });
    },
    onError: (error) => {
      hideLoader();
      dispatchToast({
        type: "error",
        message: getErrorMessage(error, "Erro ao excluir cartão"),
      });
    },
  });

  const updateCard = useMutation({
    mutationFn: updateCardService.updateCard,
    onMutate: () => dispatchLoader(),
    onSuccess: () => {
      hideLoader();
      dispatchToast({
        type: "success",
        message: "Cartão atualizado",
      });
      queryClient.invalidateQueries({ queryKey: CARDS_QUERY_KEY });
    },
    onError: (error) => {
      hideLoader();
      dispatchToast({
        type: "error",
        message: getErrorMessage(error, "Erro ao atualizar cartão"),
      });
    },
  });

  const loadAllCards = useQuery({
    queryKey: CARDS_QUERY_KEY,
    queryFn: loadCardsService.loadAll,
  });

  return { createCard, deleteCard, updateCard, loadAllCards };
}
