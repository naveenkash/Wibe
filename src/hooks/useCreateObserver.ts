import { useEffect, useRef } from "react";

export function useCreateObserver(
  callback: IntersectionObserverCallback,
  threshold?: number
) {
  let targetRef = useRef<HTMLDivElement>(null);
  let callbackRef = useRef(callback);

  useEffect(() => {
    let ref = targetRef.current as Element;
    const observer = new IntersectionObserver(callbackRef.current, {
      root: null,
      rootMargin: "0px",
      threshold: threshold ?? 0.4,
    });
    if (targetRef.current) {
      observer.observe(targetRef.current);
    }
    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, [callbackRef, threshold]);
  return [targetRef];
}
