import React from "react";
import { Story, Meta } from "@storybook/react";
import PricingSection from "./PricingSection";
import { PricingSectionProps } from "./types";

// PricingSection.stories.tsx
//https://storybook.js.org/docs/react/writing-stories/introduction

export default {
  title: "Components/organisms/PricingSection",
  component: PricingSection,
};

// We create a “template” of how args map to rendering
const Template: Story<PricingSectionProps> = (args) => (
  <PricingSection {...args} />
);

// Each story then reuses that template
export const PricingSectionPrimary = Template.bind({});
PricingSectionPrimary.args = { id: "0" };

export const PricingSectionSecondary = Template.bind({});
PricingSectionSecondary.args = {
  ...PricingSectionPrimary.args,
};
