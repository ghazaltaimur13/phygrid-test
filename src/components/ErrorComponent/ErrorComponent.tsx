import React from 'react';
import { ErrorContainer, ErrorDescription, ErrorHeading } from './ErrorComponent.style';

interface ErrorComponentProps {
  message?: string;
}

const ErrorComponent: React.FC<ErrorComponentProps> = ({ message }) => {
  return (
    <ErrorContainer>
      <ErrorHeading>Error</ErrorHeading>
      <ErrorDescription>{message || "Something went wrong!"}</ErrorDescription>
    </ErrorContainer>
  );
};

export default ErrorComponent;
