"use client";

import { Avatar } from "@/components/Atoms/Avatar";
import { SettingsWrapper } from "@/components/Molecules/SettingsWrapper";
import { Currency, CurrencyLabels } from "@/constants/enums/currency-enum";
import { Language, LanguageLabels } from "@/constants/enums/language-enum";
import {
  SystemTheme,
  SystemThemeLabels,
} from "@/constants/enums/system-theme-enum";
import { useUser } from "@/hooks/useUser";
import { formatMonthYear } from "@/utils/format";
import { CalendarDays, Mail } from "lucide-react";
import * as S from "./styles";

const notDefined = "Não definido";

export const PerfilPage = () => {
  const { user, systemPreferences, isLoading } = useUser();

  return (
    <SettingsWrapper
      title="Perfil"
      description="Suas informações de perfil"
    >
      {isLoading && <p>Carregando...</p>}
      {user && (
        <S.ProfileContent>
          <S.ProfileCard>
            <Avatar
              name={user.name}
              src={user.profilePicture}
            />
            <S.ProfileInfo>
              <p>{user.name}</p>
              <span>
                <Mail size={16} />
                {user.email}
              </span>
              <span>
                <CalendarDays size={16} />
                Membro desde {formatMonthYear(user.createdAt)}
              </span>
            </S.ProfileInfo>
          </S.ProfileCard>

          <S.SectionCard>
            <S.SectionTitle>Preferências do sistema</S.SectionTitle>
            <S.InfoRow>
              <p>Tema</p>
              <span>
                {systemPreferences
                  ? SystemThemeLabels[systemPreferences.theme as SystemTheme]
                  : notDefined}
              </span>
            </S.InfoRow>
            <S.InfoRow>
              <p>Idioma</p>
              <span>
                {systemPreferences
                  ? LanguageLabels[systemPreferences.language as Language]
                  : notDefined}
              </span>
            </S.InfoRow>
            <S.InfoRow>
              <p>Moeda</p>
              <span>
                {systemPreferences
                  ? CurrencyLabels[systemPreferences.currency as Currency]
                  : notDefined}
              </span>
            </S.InfoRow>
          </S.SectionCard>
        </S.ProfileContent>
      )}
    </SettingsWrapper>
  );
};
