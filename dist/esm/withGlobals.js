export var withGlobals = function withGlobals(StoryFn, context) {
  // const [{ myAddon }] = useGlobals();
  return StoryFn();
};