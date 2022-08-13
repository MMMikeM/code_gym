import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import Link from "./Link"

export default {
  title: "Link",
  component: Link,
  argTypes: {
    href: {
      table: {
        disable: true,
      },
    },
    className: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Link>

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />

export const Default = Template.bind({})
Default.args = {
  href: "",
  children: "Link somewhere",
}
