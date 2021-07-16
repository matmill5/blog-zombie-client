import React from "react";
import { Story, Meta } from "@storybook/react";
import PremadeComponentsSection from "./PremadeComponentsSection";
import { PremadeComponentsSectionProps } from "./types";

// PremadeComponentsSection.stories.tsx
//https://storybook.js.org/docs/react/writing-stories/introduction

export default {
  title: "Components/organisms/PremadeComponentsSection",
  component: PremadeComponentsSection,
};

// We create a “template” of how args map to rendering
const Template: Story<PremadeComponentsSectionProps> = (args) => (
  <PremadeComponentsSection {...args} />
);

// Each story then reuses that template
export const PremadeComponentsSectionPrimary = Template.bind({});
PremadeComponentsSectionPrimary.args = { id: "0" };

export const PremadeComponentsSectionSecondary = Template.bind({});
PremadeComponentsSectionSecondary.args = {
  ...PremadeComponentsSectionPrimary.args,
};
