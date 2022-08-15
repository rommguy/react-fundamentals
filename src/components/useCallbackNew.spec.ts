import { renderHook, act } from "@testing-library/react";
import { GeneralFunc, useCallbackNew } from "./useCallbackNew";
import { noop } from "lodash";

describe("useCallbackNew", () => {
  it("should return a function", () => {
    const { result } = renderHook(() => useCallbackNew(noop, []));

    expect(typeof result.current).toBe("function");
  });

  it("should be called with params", () => {
    const func = jest.fn();
    const { result } = renderHook(() => useCallbackNew(func, []));
    result.current("hello");
    expect(func).toHaveBeenCalledWith("hello");
  });

  it("should be memoized when dependencies did not change", () => {
    const func = jest.fn();
    const func2 = jest.fn();

    const { result, rerender } = renderHook(
      ({ callback }) => useCallbackNew(callback as unknown as GeneralFunc, []),
      {
        initialProps: { callback: func },
      }
    );

    const initialReturnedCallback = result.current;

    rerender({ callback: func2 });

    const secondReturnedCallback = result.current;

    expect(initialReturnedCallback).toBe(secondReturnedCallback);
  });

  it("should render when dependencies change", () => {
    const func = jest.fn();
    const func2 = jest.fn();

    const { result, rerender } = renderHook(
      ({ callback, params }) =>
        useCallbackNew(callback as unknown as GeneralFunc, [params]),
      {
        initialProps: { callback: func, params: 1 },
      }
    );

    const initialReturnedCallback = result.current;

    rerender({ callback: func2, params: 2 });

    const secondReturnedCallback = result.current;

    expect(initialReturnedCallback).not.toBe(secondReturnedCallback);
  });

  it("should not change callback if dependencies change is deep", () => {
    const func = jest.fn();
    const func2 = jest.fn();

    const deps = { x: 1 };

    const { result, rerender } = renderHook(
      ({ callback, params }) =>
        useCallbackNew(callback as unknown as GeneralFunc, [params]),
      {
        initialProps: { callback: func, params: deps },
      }
    );

    const initialReturnedCallback = result.current;

    deps.x = 2;

    rerender({ callback: func2, params: deps });

    const secondReturnedCallback = result.current;

    expect(initialReturnedCallback).toBe(secondReturnedCallback);
  });
});
