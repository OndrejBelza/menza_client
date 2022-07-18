import { faker } from "@faker-js/faker";
import { ComponentMeta, Story } from "@storybook/react";
import Banner, { BannerProps } from "./Banner";

export default {
  title: "Pages/Menu/Banner",
  component: Banner,
} as ComponentMeta<typeof Banner>;

const Template: Story<BannerProps> = (args) => <Banner {...args} />;

export const basic = Template.bind({});

basic.args = {
  img: faker.image.city(),
  name: faker.company.companyName(),
  address: faker.address.streetAddress(),
  openingHours: faker.lorem.sentences(1),
};
