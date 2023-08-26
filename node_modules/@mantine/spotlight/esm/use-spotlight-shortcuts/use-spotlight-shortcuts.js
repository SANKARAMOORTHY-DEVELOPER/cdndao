import { useHotkeys } from '@mantine/hooks';

function getHotkeysPayload(shortcuts, onToggle) {
  if (shortcuts === null) {
    return [];
  }
  if (Array.isArray(shortcuts)) {
    return shortcuts.map((shortcut) => [shortcut, onToggle]);
  }
  return [[shortcuts, onToggle]];
}
function useSpotlightShortcuts(shortcuts, onToggle) {
  useHotkeys(getHotkeysPayload(shortcuts, onToggle));
}

export { getHotkeysPayload, useSpotlightShortcuts };
//# sourceMappingURL=use-spotlight-shortcuts.js.map
