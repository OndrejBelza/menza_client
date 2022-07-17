import { faker } from "@faker-js/faker";
import { ComponentMeta, Story } from "@storybook/react";
import RestaurantCard, { RestaurantCardProps } from "./RestaurantCard";

export default {
  title: "Blocks/RestaurantCard",
  component: RestaurantCard,
} as ComponentMeta<typeof RestaurantCard>;

const Template: Story<RestaurantCardProps> = (args) => (
  <RestaurantCard {...args} />
);

export const basic = Template.bind({});

basic.args = {
  id: faker.datatype.uuid(),
  name: faker.lorem.words(3),
  address: faker.address.streetAddress(),
  openingHours: faker.lorem.words(5),
  img: faker.image.animals(),
  generateDetailLink: (id: string) => id,
};
