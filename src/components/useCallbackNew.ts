import { useRef } from "react";
import { isEqual } from "lodash";

export type GeneralFunc = (...args: unknown[]) => unknown;

export const useCallbackNew = <T extends GeneralFunc>(
  callback: T,
  dependencies: unknown[]
): T => {
  const callbackRef = useRef<T>(callback);
  const dependenciesRef = useRef(dependencies);

  if (!isEqual(dependenciesRef.current, dependencies)) {
    callbackRef.current = callback;
  }

  return callbackRef.current;
};
