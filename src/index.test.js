import { useDevice } from "./";
import { renderHook } from "@testing-library/react-hooks";

describe("useDevice Hook", () => {
  it("checks if result is correct if device is a desktop", () => {
    const { result } = renderHook(() => useDevice());

    expect(result.current.mobile).toBe(false);
    expect(result.current.desktop).toBe(true);
  });

  it("checks if result is correct if device is a mobile", () => {
    global.innerWidth = 500;
    global.dispatchEvent(new Event("resize"));

    const { result } = renderHook(() => useDevice());

    expect(result.current.mobile).toBe(true);
    expect(result.current.desktop).toBe(false);
  });

  it("checks if result is correct if custom mobile breakpoint is passed", () => {
    global.innerWidth = 500;
    global.dispatchEvent(new Event("resize"));

    const { result } = renderHook(() => useDevice(499));

    expect(result.current.mobile).toBe(false);
    expect(result.current.desktop).toBe(true);
  });
});
