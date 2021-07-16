import React from "react";
import { Story } from "@storybook/react";
import Navbar from "./Navbar";
import { NavbarProps } from "./types";

// Navbar.stories.tsx
//https://storybook.js.org/docs/react/writing-stories/introduction

export default {
  title: "Components/molecules/Navbar",
  component: Navbar,
};

// We create a “template” of how args map to rendering
const Template: Story<NavbarProps> = (args) => <Navbar {...args} />;

// Each story then reuses that template
export const NavbarPrimary = Template.bind({});
NavbarPrimary.args = {
  id: "0",
};

export const NavbarSecondary = Template.bind({});
NavbarSecondary.args = {
  ...NavbarPrimary.args,
};
