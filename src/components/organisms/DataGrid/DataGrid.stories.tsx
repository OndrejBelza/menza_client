import { faker } from "@faker-js/faker";
import { ComponentMeta, Story } from "@storybook/react";
import DataGridContainer from "./DataGridContainer";
import { Column, DataGridProps, RowData } from "./types";

export default {
  title: "Organisms/DataGrid",
  component: DataGridContainer,
} as ComponentMeta<typeof DataGridContainer>;

const Template: Story<DataGridProps> = (args) => (
  <DataGridContainer {...args} />
);

export const basic = Template.bind({});

const columns = new Array(5).fill({}).map<Column>((_, i) => ({
  name: `${i}`,
  header: faker.lorem.words(3),
  path: `${i}`,
  supportsFiltering: true,
}));

const rows: RowData[] = new Array(5).fill({}).map<RowData>(() => ({
  "0": "test 0",
  "1": "test 1",
  "2": "test 2",
  "3": "test 3",
  "4": "Test 4",
}));

basic.args = {
  columns,
  data: rows,
};
