import React from "react";
import { addDecorator } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import Center from "../src/components/Center/Center";

addDecorator(withA11y);
addDecorator(story => <Center>{story()}</Center>);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};
