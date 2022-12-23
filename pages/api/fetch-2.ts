// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  data: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const start = Date.now();
  console.log("fetch-2 access", start);
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const end = Date.now();
  const delay = end - start;
  console.log("fetch-2 end", Date.now());
  console.log("time", delay);
  res.status(200).json({ data: "Fetch-2" });
}
