import React from "react";
import { FOLDER_APP } from "@constant";
import { doLoading } from "@lib";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  await doLoading();

  return (
    <div className="next-convention">
      <span>{FOLDER_APP.LOADING_DEEPER.CASE3.LAYOUT}</span>
      {children}
    </div>
  );
}
