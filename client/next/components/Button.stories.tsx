import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import Button, { buttonProps } from "../components/Button"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Button",
  component: Button,
  argTypes: {
    color: {
      table: {
        disable: true,
      },
    },
    className: {
      table: {
        disable: true,
      },
    },
    href: {
      table: {
        disable: true,
      },
    },
    onClick: {
      table: {
        disable: true,
      },
    },
    disabled: {
      table: {
        disable: true,
      },
    },
    error: {
      table: {
        disable: true,
      },
    },
    state: {
      control: {
        type: "radio",
      },
      options: ["default", "disabled", "error"],
    },
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Button>

type storyProps = buttonProps & {
  state?: string
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = ({
  state,
  ...rest
}: storyProps) => {
  return (
    <Button
      {...rest}
      disabled={state === "disabled"}
      error={state === "error"}
    />
  )
}

export const Primary: ComponentStory<(props: storyProps) => JSX.Element> =
  Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  color: "primary",
  children: "Text",
  size: "base",
  state: "default",
}
export const Secondary: ComponentStory<(props: storyProps) => JSX.Element> =
  Template.bind({})
Secondary.args = {
  color: "secondary",
  children: "Text",
  size: "base",
  state: "default",
}
export const Tertiary: ComponentStory<(props: storyProps) => JSX.Element> =
  Template.bind({})
Tertiary.args = {
  color: "tertiary",
  children: "Text",
  size: "base",
  state: "default",
}
export const Critical: ComponentStory<(props: storyProps) => JSX.Element> =
  Template.bind({})
Critical.args = {
  color: "critical",
  children: "Text",
  size: "base",
  state: "default",
}
