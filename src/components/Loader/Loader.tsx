import { Circle, Spinner, SpinnerContainer } from "./Loader.style";

// Loading Spinner component
const Loader: React.FC = () => {
    return (
      <SpinnerContainer>
        <Spinner>
          <Circle size={100} delay={0} opacity={0.2} />
          <Circle size={80} delay={0.3} opacity={0.3} />
          <Circle size={60} delay={0.6} opacity={0.4} />
          <Circle size={40} delay={0.9} opacity={0.6} />
        </Spinner>
      </SpinnerContainer>
    );
};
  
export default Loader;