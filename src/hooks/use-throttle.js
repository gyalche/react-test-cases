import { useEffect, useRef, useState } from "react";

const CusomeThrottle = (value, delay) => {
  const [throttledValue, setThrottleValue] = useState(value);

  const lastTimer = useRef(Date.now());

  useEffect(() => {
    const handler = setTimeout(() => {
      const now = Date.now();
      const timeElapsed = now - lastTimer.current

      if (timeElapsed >= delay) {
        setThrottleValue(value)
        lastTimer.current = now;
      }
    }, delay - (Date.now() - lastTimer.current))

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return throttledValue;
}


export default CusomeThrottle;