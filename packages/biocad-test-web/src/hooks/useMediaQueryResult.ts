import { useEffect, useMemo, useState } from 'react';

export function useMediaQueryResult(mediaQueryString: string) {
  const mediaQueryList = useMemo(() => {
    return window.matchMedia(mediaQueryString);
  }, [mediaQueryString]);

  const [queryResult, setQueryResult] = useState(mediaQueryList.matches);

  useEffect(() => {
    const handleMediaQueryListChange = (e: MediaQueryListEvent) => {
      setQueryResult(e.matches);
    };

    mediaQueryList.addEventListener('change', handleMediaQueryListChange);
    return () => {
      mediaQueryList.removeEventListener('change', handleMediaQueryListChange);
    };
  }, [mediaQueryList]);

  return queryResult;
}
