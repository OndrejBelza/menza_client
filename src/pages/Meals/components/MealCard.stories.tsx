import { faker } from "@faker-js/faker";
import { ComponentMeta, Story } from "@storybook/react";
import withRouter from "@utils/storybook/withRouter";
import MealCard, { MealCardProps } from "./MealCard";

export default {
  title: "Pages/Meals/MealCard",
  component: MealCard,
  args: {
    generateMealLink: (id: string) => id,
  },
  argTypes: {
    category: {
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
    generateMealLink: {
      table: {
        disable: true,
      },
    },
  },
  decorators: [withRouter],
} as ComponentMeta<typeof MealCard>;

const Template: Story<MealCardProps> = (args) => <MealCard {...args} />;

export const basic = Template.bind({});

basic.args = {
  id: faker.datatype.uuid(),
  name: faker.lorem.words(3),
};
