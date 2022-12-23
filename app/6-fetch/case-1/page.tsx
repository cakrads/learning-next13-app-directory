import React from "react";
import { API_URL, FOLDER_APP } from "@constant";
import Link from "next/link";

export default async function Page() {
  const response = await fetch(
    `${API_URL}/fetch-1?source=${FOLDER_APP.FETCH.CASE1.PAGE}`
  );
  const result = await response.json();
  console.log({ result });

  return (
    <div className="next-convention">
      <span>{FOLDER_APP.FETCH.CASE1.PAGE}</span>
      Result: {result.data}
      <br />
      <Link href="/6-fetch">Back</Link>
    </div>
  );
}
