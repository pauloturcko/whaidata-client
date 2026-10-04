import * as S from "./styles";

type ToggleProps = {
  checked: boolean;
  onChange: () => void;
  disabled?: boolean;
  label?: string;
};

export const Toggle = ({ checked, onChange, disabled, label }: ToggleProps) => {
  return (
    <S.Track
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      disabled={disabled}
      onClick={onChange}
      $checked={checked}
    >
      <S.Thumb $checked={checked} />
    </S.Track>
  );
};
