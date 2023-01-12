import { act, renderHook, waitFor } from "@testing-library/react";

import useIntentManager from "../useIntentManager";

import intents from "../../data/intents.json";

describe("useIntentManager", () => {
  it("should be able to handle events and return custom data from hook", () => {
    const { result } = renderHook(() => useIntentManager());

    // initial asserts
    expect(result.current.intents).toHaveLength(intents.length);
    expect(result.current.activeIntents).toEqual([]);
    expect(result.current.isUpdating).toBe(false);
    expect(result.current.allIntentsActive).toBe(false);

    // select first intent
    act(() => {
      result.current.handleChangeStatus(intents[0].id, true);
    });

    expect(result.current.isUpdating).toBe(true);
    expect(result.current.activeIntents.length).toEqual(1);

    // select all intents on calling handleAllIntents function
    act(() => {
      result.current.handleAllIntents();
    });

    expect(result.current.allIntentsActive).toBe(true);
    expect(result.current.activeIntents).toEqual(
      intents.map((intent) => intent.id)
    );

    // unselect third intent
    act(() => {
      result.current.handleChangeStatus(intents[2].id, false);
    });

    expect(result.current.allIntentsActive).toBe(false);
    expect(result.current.activeIntents).not.toHaveLength(intents.length);
  });
});
