import { ComponentMeta, Story } from "@storybook/react";
import Category, { CategoryProps } from "./Category";

export default {
  title: "Pages/Meals/Category",
  component: Category,
  argTypes: {
    name: {
      control: "select",
      options: [
        "Polévka",
        "Bezmasá jídla",
        "Moučníky",
        "Hlavní jídla",
        "Minutky",
        "Specialita dne",
        "Studená jídla",
        "Saláty a talíře",
        "Unknown",
      ],
      defaultValue: "Polévka",
    },
  },
} as ComponentMeta<typeof Category>;

const Template: Story<CategoryProps> = (args) => <Category {...args} />;

export const basic = Template.bind({});
