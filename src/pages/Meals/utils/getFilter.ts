const getFilter = (
  filter: Record<string, string | null>
): Record<string, string> => {
  return Object.fromEntries(
    Object.entries(filter).filter(([_, v]) => v != null)
  ) as Record<string, string>;
};

export default getFilter;
