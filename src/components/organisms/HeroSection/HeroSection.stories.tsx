import React from "react";
import { Story, Meta } from "@storybook/react";
import HeroSection from "./HeroSection";
import { HeroSectionProps } from "./types";

// HeroSection.stories.tsx
//https://storybook.js.org/docs/react/writing-stories/introduction

export default {
  title: "Components/organisms/HeroSection",
  component: HeroSection,
};

// We create a “template” of how args map to rendering
const Template: Story<HeroSectionProps> = (args) => <HeroSection {...args} />;

// Each story then reuses that template
export const HeroSectionPrimary = Template.bind({});
HeroSectionPrimary.args = { id: "0" };

export const HeroSectionSecondary = Template.bind({});
HeroSectionSecondary.args = {
  ...HeroSectionPrimary.args,
};
