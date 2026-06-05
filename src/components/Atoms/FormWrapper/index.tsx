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
  height: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
`;
