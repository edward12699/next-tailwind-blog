import React, { useEffect } from 'react';
import { onCLS } from 'web-vitals';


const WebVitals = () => {
  useEffect(() => {
    onCLS(console.log);
  }, []);

  return null;
}

export default WebVitals;
