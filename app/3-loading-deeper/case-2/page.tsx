import { FOLDER_APP } from "@constant";
import Link from "next/link";

export default async function Page() {
  return (
    <div className="next-convention">
      <span>{FOLDER_APP.LOADING_DEEPER.CASE2.PAGE}</span>
      <br />
      The loading has been shown, after that the layout and the page shown.
      <br />
      The structure still like this
      &#60;layout&#62;&#60;page&#62;&#60;/page&#62;&#60;/layout&#62;.
      <br />
      <br />
      <Link href="/3-loading-deeper">Back</Link>
    </div>
  );
}
