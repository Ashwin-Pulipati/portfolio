export const slugify = (title) => {
  return title.toLowerCase().replace(/\s+/g, "-").replace(/\//g, "-");
};
