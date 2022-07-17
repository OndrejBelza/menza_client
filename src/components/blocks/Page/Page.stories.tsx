import { faker } from "@faker-js/faker";
import { ComponentMeta, Story } from "@storybook/react";
import Page, { PageProps } from "./Page";

export default {
  title: "Blocks/Page",
  component: Page,
} as ComponentMeta<typeof Page>;

const Template: Story<PageProps> = (args) => <Page {...args} />;

export const basic = Template.bind({});

basic.args = {
  isLoading: true,
  error: faker.lorem.paragraphs(2),
  children: <>page content</>,
};
