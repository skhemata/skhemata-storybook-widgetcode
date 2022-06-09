"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withRoundTrip = void 0;

var _addons = require("@storybook/addons");

var _coreEvents = require("@storybook/core-events");

var _constants = require("./constants");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var withRoundTrip = function withRoundTrip(storyFn) {
  var _useChannel;

  var emit = (0, _addons.useChannel)((_useChannel = {}, _defineProperty(_useChannel, _constants.EVENTS.REQUEST, function () {
    emit(_constants.EVENTS.RESULT, {
      danger: [{
        title: "Panels are the most common type of addon in the ecosystem",
        description: "For example the official @storybook/actions and @storybook/a11y use this pattern"
      }, {
        title: "You can specify a custom title for your addon panel and have full control over what content it renders",
        description: "@storybook/components offers  components to help you addons with the look and feel of Storybook itself"
      }],
      warning: [{
        title: 'This tabbed UI pattern is a popular option to display "test" reports.',
        description: "It's used by @storybook/addon-jest and @storybook/addon-a11y. @storybook/components offers this and other components to help you quickly build an addon"
      }]
    });
  }), _defineProperty(_useChannel, _coreEvents.STORY_CHANGED, function () {
    emit(_constants.EVENTS.RESULT, {
      danger: [],
      warning: []
    });
  }), _defineProperty(_useChannel, _constants.EVENTS.CLEAR, function () {
    emit(_constants.EVENTS.RESULT, {
      danger: [],
      warning: []
    });
  }), _useChannel));
  return storyFn();
};

exports.withRoundTrip = withRoundTrip;