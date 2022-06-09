function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { useChannel } from "@storybook/addons";
import { STORY_CHANGED } from "@storybook/core-events";
import { EVENTS } from "./constants";
export var withRoundTrip = function withRoundTrip(storyFn) {
  var _useChannel;

  var emit = useChannel((_useChannel = {}, _defineProperty(_useChannel, EVENTS.REQUEST, function () {
    emit(EVENTS.RESULT, {
      danger: [],
      warning: []
    });
  }), _defineProperty(_useChannel, STORY_CHANGED, function () {
    emit(EVENTS.RESULT, {
      danger: [],
      warning: []
    });
  }), _defineProperty(_useChannel, EVENTS.CLEAR, function () {
    emit(EVENTS.RESULT, {
      danger: [],
      warning: []
    });
  }), _useChannel));
  return storyFn();
};