import React, { useState, useEffect } from 'react';
import Loader from '../src/components/Loader/Loader'; // Import your LoadingSpinner component
import UserPage from './pages/UserPage/UserPage';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set a timer for 3 seconds (3000ms)
    const timer = setTimeout(() => {
      setLoading(false); // After 3 seconds, set loading to false
    }, 3000);

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <Loader /> // Show the loading spinner while loading is true
      ) : (
        <UserPage />
      )}
    </div>
  );
};

export default App;
