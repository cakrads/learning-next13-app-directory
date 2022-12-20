import Link from "next/link";
import { FOLDER_APP } from "@constant";
import BuggyButton from "@components/BuggyButton";

export default async function Page() {
  return (
    <div className="next-convention">
      <span>{FOLDER_APP.ERROR.CASE1.PAGE}</span>
      <br />
      <BuggyButton />
      <br />
      <br />
      <Link href="5-error">Back</Link>
      <br />
      <br />
    </div>
  );
}
