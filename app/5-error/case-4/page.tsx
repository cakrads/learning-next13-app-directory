import Link from "next/link";
import { FOLDER_APP } from "@constant";

export default async function Page() {
  return (
    <div className="next-convention">
      <span>{FOLDER_APP.ERROR.CASE4.PAGE}</span>
      <br />
      <Link href="5-error/case-4/dynamic">Dynamic Example</Link>
      <br />
      <br />
      <Link href="5-error">Back</Link>
      <br />
      <br />
    </div>
  );
}
