import { useEffect, useImperativeHandle, useRef } from "react";

const useRipple = <T extends HTMLElement>(
  ref?: React.ForwardedRef<T>,
  options?: { rippleColor?: string }
) => {
  const internalRef = useRef<T>(null);

  useEffect(() => {
    const element = internalRef.current;
    if (!element) return;

    const createRipple = (event: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const ripple = document.createElement("span");
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;

      if (options?.rippleColor)
        ripple.style.backgroundColor = options?.rippleColor;
      ripple.classList.add("ripple");

      element.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 500);
    };

    element.addEventListener("click", createRipple);

    return () => {
      element.removeEventListener("click", createRipple);
    };
  }, [options?.rippleColor]);

  // Combine the internal ref with the forwarded ref
  useImperativeHandle(ref, () => internalRef.current as T);

  return internalRef;
};

export default useRipple;
