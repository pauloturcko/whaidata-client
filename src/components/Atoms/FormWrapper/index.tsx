import { ReactNode, ComponentProps } from "react";
import styled from "styled-components";

type FormWrapperProps = ComponentProps<"form"> & {
  children: ReactNode;
};

export const FormWrapper = ({ children, ...props }: FormWrapperProps) => {
  return <Wrapper {...props}>{children}</Wrapper>;
};

const Wrapper = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
