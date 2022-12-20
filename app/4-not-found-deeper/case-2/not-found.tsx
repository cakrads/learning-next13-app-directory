import { FOLDER_APP } from "@constant";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="next-convention">
      <>
        <span>{FOLDER_APP.NOT_FOUND_DEEPER.CASE2.NOT_FOUND}</span>
      </>
      <br />
      Page Not found from {FOLDER_APP.NOT_FOUND_DEEPER.CASE2.NOT_FOUND}
      <br />
      <br />
      <Link href="/4-not-found-deeper">Back</Link>
    </div>
  );
}
