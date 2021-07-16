import React from "react";
import { Story, Meta } from "@storybook/react";
import HowItWorksSection from "./HowItWorksSection";
import { HowItWorksSectionProps } from "./types";

// HowItWorksSection.stories.tsx
//https://storybook.js.org/docs/react/writing-stories/introduction

export default {
  title: "Components/organisms/HowItWorksSection",
  component: HowItWorksSection,
};

// We create a “template” of how args map to rendering
const Template: Story<HowItWorksSectionProps> = (args) => (
  <HowItWorksSection {...args} />
);

// Each story then reuses that template
export const HowItWorksSectionPrimary = Template.bind({});
HowItWorksSectionPrimary.args = { id: "0" };

export const HowItWorksSectionSecondary = Template.bind({});
HowItWorksSectionSecondary.args = {
  ...HowItWorksSectionPrimary.args,
};
