import Link from "next/link";
import { FOLDER_APP } from "@constant";
import BuggyButton from "@components/BuggyButton";

export default async function Page() {
  return (
    <div className="next-convention">
      <span>{FOLDER_APP.ERROR.CASE2.PAGE}</span>
      <br />
      <BuggyButton />
      <br />
      If error.tsx is not exist in {FOLDER_APP.ERROR.ERROR}, there will be BLANK
      SCREEN.
      <br />
      But, if error.tsx is exist in {FOLDER_APP.ERROR.ERROR}, the system will
      use that root error.
      <br />
      <br />
      <br />
      Another case, if error.tsx is not exist in {FOLDER_APP.ERROR.ERROR} but,
      the error.tsx exist in root app folder, the error.tsx will be shown, not
      BLANK screen. So it`s better to has error.tsx in app folder.
      <br />
      <Link href="5-error">Back</Link>
      <br />
      <br />
    </div>
  );
}
