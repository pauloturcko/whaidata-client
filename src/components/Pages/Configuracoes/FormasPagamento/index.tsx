"use client";

import { SettingsWrapper } from "@/components/Molecules/SettingsWrapper";
import { ToggleItem } from "@/components/Molecules/ToggleItem";
import { usePaymentPreference } from "@/hooks/usePaymentPreference";
import * as S from "./styles";

export const FormasPagamentoPage = () => {
  const { loadPaymentPreferences, togglePaymentPreference } =
    usePaymentPreference();

  return (
    <SettingsWrapper
      title="Formas de Pagamento"
      description="Escolha quais formas de pagamento aparecem nos seus lançamentos"
    >
      <S.PreferencesList>
        {loadPaymentPreferences.isLoading && <p>Carregando...</p>}
        {loadPaymentPreferences.data?.length === 0 && (
          <p>Nenhuma forma de pagamento encontrada.</p>
        )}
        {loadPaymentPreferences.data?.map((preference) => (
          <ToggleItem
            key={preference.id}
            title={preference.paymentMethod.name}
            description={
              preference.isActive ? "Disponível no cadastro" : "Oculto"
            }
            checked={preference.isActive}
            onChange={() =>
              togglePaymentPreference.mutate({
                paymentMethodId: preference.paymentMethodId,
              })
            }
          />
        ))}
      </S.PreferencesList>
    </SettingsWrapper>
  );
};
