"use client";
import { FOLDER_APP } from "@constant";
import Link from "next/link";
// 'use client' marks this page as a Client Component
// https://beta.nextjs.org/docs/rendering/server-and-client-components

import React from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  React.useEffect(() => {
    console.log("logging error:", error);
  }, [error]);

  return (
    <div className="next-convention">
      <span>{FOLDER_APP.ERROR.CASE3.ERROR}</span>
      <strong> Error: </strong> {error?.message}
      <br />
      <br />
      When reset() called, it will still error.
      <br />
      <button onClick={() => reset()}> Try Again </button>
      <br />
      <br />
      So, we need redirect back to /5-error
      <br />
      <Link href="5-error">Back</Link>
    </div>
  );
}
