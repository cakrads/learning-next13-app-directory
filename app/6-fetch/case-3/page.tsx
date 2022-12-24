import { API_URL, FOLDER_APP } from "@constant";
import Link from "next/link";

export default async function Page() {
  await fetch(`${API_URL}/fetch-2?source=${FOLDER_APP.FETCH.CASE3.LAYOUT}`);
  console.log("fetch in", FOLDER_APP.FETCH.CASE3.PAGE, "has been done");

  return (
    <div className="next-convention">
      <span>{FOLDER_APP.FETCH.CASE3.PAGE}</span>
      Actually, the fetch in layout.ts will similar with case-2 layout. When the
      6-fetch access, next13 will be access all available layout in that folder.
      So, this will execute fetch() in case-3/layout.ts too.
      <br />
      <br />
      if we click `Check`` after 1 second, the loading, loading from 6-fetch
      will show in 2 second. Then, after fetch() in layout.tsx done and show
      page.tsx, page.tsx will show loading from 6-fetch/case-3. After 3 seconds
      or after fetch() in page.tsx is done, the loading.tsx hide, and show the
      content. We can say the fetch access Sequential.
      <br />
      <br />
      But wait, let`s try to refresh this page. If we access this page directly,
      fetch() in page.tsx will be imaditly execute too before fetch() in
      layout.tsx done. Or we can say the fetch access Parallel.
      <br />
      You can see the console server to see it.
      <br />
      <br />
      <br />
      <Link href="/6-fetch">Back</Link>
    </div>
  );
}
