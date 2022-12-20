import React from "react";
import { FOLDER_APP } from "@constant";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="next-convention">
      <span>{FOLDER_APP.ERROR.CASE2.LAYOUT}</span>
      {children}
    </div>
  );
}