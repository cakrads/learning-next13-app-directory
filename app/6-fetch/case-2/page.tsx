import { FOLDER_APP } from "@constant";
import Link from "next/link";

export default function Page() {
  return (
    <div className="next-convention">
      <span>{FOLDER_APP.FETCH.CASE2.PAGE}</span>
      The behavior will be:
      <br />
      1. It will show loading from 6-fetch folder, not from 6-fetch/case-2
      folder
      <br />
      this cause the `{FOLDER_APP.FETCH.CASE2.LAYOUT}` already execute when the
      root ({FOLDER_APP.FETCH.PAGE}) has been access. <br />
      And in that time, the promise will call available loading, which is the
      loading in 6-fetch.
      <br />
      <br />
      2. The loading will show only 2 seconds
      <br />
      Cause the fetch executed after 1 second, the loading only shows 2 seconds.
      <br />
      <br />
      3. Loading not show
      <br />
      The fetch is already finished, but you will still see loading. This
      loading is not from 6-fetch folder, but from the case-2 folder. next13
      will show loading first, if the loading is available, after that will show
      the page.
      <br />
      <br />
      4. Loading does not show, and it does not access case-2 page
      <br />
      As we know, the layout will execute in the root, and when we want to
      access it, there`s no return. In this case, next.js should find `loading`
      and will show it. Unfortunately, there`s no loading in folder /app nor
      folder /6-fetch, so it still shows 6-fetch page until fetch() is done,
      then shows case-2 page. So, it`s better to have `loading` in the
      app/folder to handle loading globally.
      <br />
      <br />
      Note: The fetch will execute in 3 seconds. Look file
      `page/api/fetch-1.ts`.
      <br />
      <Link href="/6-fetch">Back</Link>
    </div>
  );
}
