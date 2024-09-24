import styled, { keyframes, css } from 'styled-components';

// Define the pulse animation
const pulse = keyframes`
  0% { transform: scale(0.95); opacity: 0.7; }
  50% { transform: scale(1.05); opacity: 0.9; }
  100% { transform: scale(0.95); opacity: 0.7; }
`;

// Define the rotate animation
const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

// CSS for spinner rotation
const spinnerRotation = css`
  animation: ${rotate} 10s linear infinite;
`;

// CSS for circle animation
const circleAnimation = ({ delay }: { delay: number }) => css`
  animation: ${pulse} 2s ease-in-out infinite;
  animation-delay: ${delay}s;
`;

// Spinner container centered in the viewport
export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

// Spinner wrapper with rotation animation
export const Spinner = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  ${spinnerRotation} // Using the spinner rotation styles
`;

// Styled component for circles using the pulse animation
export const Circle = styled.div<{ size: number; delay: number; opacity: number }>`
  position: absolute;
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  top: ${({ size }) => `${(100 - size) / 2}px`}; // Center vertically
  left: ${({ size }) => `${(100 - size) / 2}px`}; // Center horizontally
  border-radius: 50%;
  background-color: ${({ opacity }) => `rgba(127, 185, 0, ${opacity})`};
  ${circleAnimation} // Using the circle animation styles
`;
