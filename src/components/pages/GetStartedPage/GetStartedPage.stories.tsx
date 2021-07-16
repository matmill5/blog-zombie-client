import React from "react";
import { Story, Meta } from "@storybook/react";
import GetStartedPage from "./GetStartedPage";
import { GetStartedPageProps } from "./types";

// GetStartedPage.stories.tsx
//https://storybook.js.org/docs/react/writing-stories/introduction

export default {
  title: "Components/pages/GetStartedPage",
  component: GetStartedPage,
};

// We create a “template” of how args map to rendering
const Template: Story<GetStartedPageProps> = (args) => (
  <GetStartedPage {...args} />
);

// Each story then reuses that template
export const GetStartedPagePrimary = Template.bind({});
GetStartedPagePrimary.args = { id: "0" };

export const GetStartedPageSecondary = Template.bind({});
GetStartedPageSecondary.args = {
  ...GetStartedPagePrimary.args,
};
