import { ReactNode } from "react";
import styled from "styled-components";

type FormWrapperProps = {
  children: ReactNode;
};

export const FormWrapper = ({ children }: FormWrapperProps) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
