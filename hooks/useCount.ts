import React from "react";
export function useCount(initialValue?: number) {
  initialValue = initialValue ?? 0;
  let [count, setCount] = React.useState(initialValue);
  const decrement = React.useCallback(() => {
    setCount((currentCount) => currentCount - 1);
  }, []);
  const increment = React.useCallback(() => {
    setCount((currentCount) => currentCount + 1);
  }, []);
  return { count, decrement, increment };
}
