import { FOLDER_APP } from "@constant";

export default function Loading() {
  console.log(
    `Loading in ${FOLDER_APP.LOADING.LOADING} rendered in server only`
  );

  /**
   * From the console in line 4, I got:
   * - About Render:
   *    - The console shown in server, not browser
   *    - The console shown when the url `BASE_URL/3-loading` access
   *    - The console not shown again after the second path / the dynamic path access `BASE_URL/3-loading/[dynamic]`
   * - About Call:
   *    - this loading will show when url`/3-loading` and/or more `/3-loading/[dynamic1]/[dynamic2]` do promise.
   */

  return (
    <div className="next-convention">
      <span>{FOLDER_APP.LOADING.LOADING}</span>
      Loading...
      <br />
    </div>
  );
}
