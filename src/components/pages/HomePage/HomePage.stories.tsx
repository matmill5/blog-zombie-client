import React from "react";
import { Story, Meta } from "@storybook/react";
import HomePage from "./HomePage";
import { HomePageProps } from "./types";

// HomePage.stories.tsx
//https://storybook.js.org/docs/react/writing-stories/introduction

export default {
  title: "Components/pages/HomePage",
  component: HomePage,
};

// We create a “template” of how args map to rendering
const Template: Story<HomePageProps> = (args) => <HomePage {...args} />;

// Each story then reuses that template
export const HomePagePrimary = Template.bind({});
HomePagePrimary.args = { id: "0" };

export const HomePageSecondary = Template.bind({});
HomePageSecondary.args = {
  ...HomePagePrimary.args,
};
