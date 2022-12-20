import { FOLDER_APP } from "@constant";
import { doLoading2 } from "@lib";
import Link from "next/link";

export default async function Page() {
  await doLoading2();

  return (
    <div className="next-convention">
      <span>{FOLDER_APP.LOADING_DEEPER.CASE3.PAGE}</span>
      <br />
      I try the diffrent function in layout.ts and page.ts, with both delay 3
      seconds. <br />
      The result is, the loading still shown in 3 seconds, I will try discus in{" "}
      {""}
      <Link href="#">fetch example</Link>.
      <br />
      <br />
      <br />
      <Link href="/3-loading-deeper">Back</Link>
    </div>
  );
}

/** For fetch
 *       
 * {/* layout.ts use doLoading(), and page.ts use doLoading2(). <br />
  The console result like this:<br />
  doLoading2() start 1671526178787<br />
  doLoading() start 1671526178788<br />
  doLoading2() end 1671526181798 3011<br />
  doLoading() end 1671526181799 3011<br />
  <br /><br />
  <b>Result:</b><br/>
  <ul>
    <li></li>
  </ul> 
 */
