import React from "react";
import { Story, Meta } from "@storybook/react";
import AboutSection from "./AboutSection";
import { AboutSectionProps } from "./types";

// AboutSection.stories.tsx
//https://storybook.js.org/docs/react/writing-stories/introduction

export default {
  title: "Components/organisms/AboutSection",
  component: AboutSection,
};

// We create a “template” of how args map to rendering
const Template: Story<AboutSectionProps> = (args) => <AboutSection {...args} />;

// Each story then reuses that template
export const AboutSectionPrimary = Template.bind({});
AboutSectionPrimary.args = { id: "0" };

export const AboutSectionSecondary = Template.bind({});
AboutSectionSecondary.args = {
  ...AboutSectionPrimary.args,
};
