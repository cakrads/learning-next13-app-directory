import { FOLDER_APP } from "@constant";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="next-convention">
      <>
        <span>{FOLDER_APP.NOT_FOUND_DEEPER.NOT_FOUND}</span>
      </>
      Page Not found from {FOLDER_APP.NOT_FOUND_DEEPER.NOT_FOUND}
      <br />
      <br />
      <b>Note - This Not Found will show cause :</b>
      <br />
      <ul>
        <li>called from notFound() in case-2/layout.ts</li>
        <li>called from notFound() in case-3/template.ts</li>
      </ul>
      <br />
      <br />
      Go To: <Link href="4-not-found-deeper">/4-not-found-deeper</Link>
    </div>
  );
}
