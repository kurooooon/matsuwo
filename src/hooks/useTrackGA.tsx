import { useCallback } from 'react';

export const useTrackGA = () => {
  return useCallback((params) => {
    if (window.dataLayer) {
      window.dataLayer.push(params);
    }
  }, []);
};
