import { ComponentMeta, Story } from "@storybook/react";
import Card, { CardProps } from "./Card";

export default {
  title: "Elements/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: Story<CardProps> = (args) => (
  <div className="max-w-md">
    <Card {...args} />
  </div>
);

export const basic = Template.bind({});

basic.args = {
  children: <>Hello world</>,
};
