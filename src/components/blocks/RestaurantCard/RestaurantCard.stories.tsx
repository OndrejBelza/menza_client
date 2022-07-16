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
