import React from "react";
import { FOLDER_APP } from "@constant";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="next-convention">
      <span>{FOLDER_APP.NOT_FOUND_DEEPER.CASE1.TEMPLATE}</span>
      {children}
    </div>
  );
}
