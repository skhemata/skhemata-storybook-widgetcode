import { useChannel } from "@storybook/addons";
import type { DecoratorFunction } from "@storybook/addons";
import { STORY_CHANGED } from "@storybook/core-events";
import { EVENTS } from "./constants";

export const withRoundTrip: DecoratorFunction = (storyFn) => {
  const emit = useChannel({
    [EVENTS.REQUEST]: () => {
      emit(EVENTS.RESULT, {
        danger: [],
        warning: [],
      });
    },
    [STORY_CHANGED]: () => {
      emit(EVENTS.RESULT, {
        danger: [],
        warning: [],
      });
    },
    [EVENTS.CLEAR]: () => {
      emit(EVENTS.RESULT, {
        danger: [],
        warning: [],
      });
    },
  });
  return storyFn();
};
