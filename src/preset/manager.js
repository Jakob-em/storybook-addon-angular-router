import { ADDON_ID } from "../constants";

const getAddons = async () => {
  const _previewApi = await import("@storybook/preview-api");
  if (_previewApi.addons.register) {
    return _previewApi.addons;
  }

  const _managerApi = await import("@storybook/manager-api");
  return _managerApi.addons;
};

// Register the addon
(async () => {
  try {
    const addons = await getAddons();
    addons.register(ADDON_ID, () => {});
  } catch (error) {
    throw new Error("Failed to register the addon");
  }
})();
