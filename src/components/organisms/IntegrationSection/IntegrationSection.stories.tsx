import React from "react";
import { Story, Meta } from "@storybook/react";
import IntegrationSection from "./IntegrationSection";
import { IntegrationSectionProps } from "./types";

// IntegrationSection.stories.tsx
//https://storybook.js.org/docs/react/writing-stories/introduction

export default {
  title: "Components/organisms/IntegrationSection",
  component: IntegrationSection,
};

// We create a “template” of how args map to rendering
const Template: Story<IntegrationSectionProps> = (args) => (
  <IntegrationSection {...args} />
);

// Each story then reuses that template
export const IntegrationSectionPrimary = Template.bind({});
IntegrationSectionPrimary.args = { id: "0" };

export const IntegrationSectionSecondary = Template.bind({});
IntegrationSectionSecondary.args = {
  ...IntegrationSectionPrimary.args,
};
