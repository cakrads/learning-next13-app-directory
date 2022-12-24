import React from "react";
import { API_URL, FOLDER_APP } from "@constant";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  await fetch(`${API_URL}/fetch-1?source=${FOLDER_APP.FETCH.CASE3.LAYOUT}`);
  console.log("fetch in", FOLDER_APP.FETCH.CASE3.LAYOUT, "has been done");

  return (
    <div className="next-convention">
      <span>{FOLDER_APP.FETCH.CASE3.LAYOUT}</span>
      Doing fetching in layout.ts
      <br />
      {children}
    </div>
  );
}
