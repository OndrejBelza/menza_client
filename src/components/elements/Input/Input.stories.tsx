import { faker } from "@faker-js/faker";
import { ComponentMeta, Story } from "@storybook/react";
import Input, { InputProps } from "./Input";

export default {
  title: "Elements/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const basic = Template.bind({});

basic.args = {
  value: faker.lorem.word(),
  disabled: false,
  onChange: (event) => console.log(event),
};
