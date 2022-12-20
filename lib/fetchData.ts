export const fetchData = async (
  dynamicSlug: string | undefined
): Promise<string | undefined> => {
  // artificial delay
  await new Promise((resolve) => setTimeout(resolve, 3000));

  if (!dynamicSlug) return;

  return dynamicSlug;
};

export const doLoading = async (): Promise<string | undefined> => {
  // artificial delay
  const start = Date.now();
  console.log("doLoading() start", start);
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const end = Date.now();
  const delay = end - start;
  console.log("doLoading() end", Date.now(), delay);
  return "1";
};

export const doLoading2 = async (): Promise<string | undefined> => {
  // artificial delay
  const start = Date.now();
  console.log("doLoading2() start", start);
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const end = Date.now();
  const delay = end - start;
  console.log("doLoading2() end", Date.now(), delay);
  return "2";
};

export const returnParam = async (params: string): Promise<string | undefined> => {
  // artificial delay
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return params;
};