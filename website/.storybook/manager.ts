import { addons } from "@storybook/manager-api";
import themeStorybook from "./themeStorybook";

addons.setConfig({
  theme: themeStorybook,
});
