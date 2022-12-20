import React from "react";
import { FOLDER_APP } from "@constant";

export type TLayoutProps = {
  params?: any;
  children?: React.ReactNode;
};

export default function Layout({ children, params }: TLayoutProps) {
  return (
    <div className="next-convention">
      <span>
        {FOLDER_APP.NESTED.DYNAMIC.LAYOUT} | Current path: {params["1-dynamic"]}
        .
      </span>
      <br />
      The `Dynamic Path` will get from `params[1-dynamic]`.
      <br />
      <br />
      {children}
    </div>
  );
}
