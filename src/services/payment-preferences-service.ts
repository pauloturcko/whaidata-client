import { http } from "@/http/http";

export type PaymentPreference = {
  id: number;
  paymentMethodId: number;
  isActive: boolean;
  paymentMethod: {
    id: number;
    name: string;
    slug: string;
    requiresCard: boolean;
  };
};

export const loadPaymentPreferencesService = {
  loadAll: async (): Promise<PaymentPreference[]> => {
    const response = await http.get<PaymentPreference[]>(
      "/payment-method/list"
    );
    return response.data;
  },
};

export const togglePaymentPreferenceService = {
  toggle: ({ paymentMethodId }: { paymentMethodId: number }) =>
    http.patch(`/payment-method/${paymentMethodId}/update-preferences`),
};
