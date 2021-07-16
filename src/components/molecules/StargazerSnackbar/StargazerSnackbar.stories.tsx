import React from "react";
import { Story } from "@storybook/react";
import StargazerSnackbar from "./StargazerSnackbar";
import { StargazerSnackbarProps } from "./types";

// StargazerSnackbar.stories.tsx
//https://storybook.js.org/docs/react/writing-stories/introduction

export default {
  title: "Components/molecules/StargazerSnackbar",
  component: StargazerSnackbar,
};

// We create a “template” of how args map to rendering
const Template: Story<StargazerSnackbarProps> = (args) => (
  <StargazerSnackbar {...args} />
);

// Each story then reuses that template
export const StargazerSnackbarPrimary = Template.bind({});
StargazerSnackbarPrimary.args = {
  id: "0",
};

export const StargazerSnackbarSecondary = Template.bind({});
StargazerSnackbarSecondary.args = {
  ...StargazerSnackbarPrimary.args,
};
