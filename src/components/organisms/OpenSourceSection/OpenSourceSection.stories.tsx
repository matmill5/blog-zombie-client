import React from "react";
import { Story, Meta } from "@storybook/react";
import OpenSourceSection from "./OpenSourceSection";
import { OpenSourceSectionProps } from "./types";

// OpenSourceSection.stories.tsx
//https://storybook.js.org/docs/react/writing-stories/introduction

export default {
  title: "Components/organisms/OpenSourceSection",
  component: OpenSourceSection,
};

// We create a “template” of how args map to rendering
const Template: Story<OpenSourceSectionProps> = (args) => (
  <OpenSourceSection {...args} />
);

// Each story then reuses that template
export const OpenSourceSectionPrimary = Template.bind({});
OpenSourceSectionPrimary.args = { id: "0" };

export const OpenSourceSectionSecondary = Template.bind({});
OpenSourceSectionSecondary.args = {
  ...OpenSourceSectionPrimary.args,
};
