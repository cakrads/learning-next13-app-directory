import { FOLDER_APP } from "@constant";
import Link from "next/link";

export default function Page() {
  return (
    <div className="next-convention">
      <span>{FOLDER_APP.FETCH.PAGE}</span>
      <br />
      <section>
        <h3>Case 1</h3>
        <p>
          simple fetching in page.
          <br />
          <Link href="6-fetch/case-1">Check {">"}</Link>
        </p>
      </section>
      <section>
        <h3>Case 2</h3>
        <p>
          There a fetch in layout.tsx. Try to do this scenario:
          <br />
          1. Refresh this page, and click Check imadiately. <br />
          2. Refresh this page, wait 1 second, and click Check button. <br />
          3. Refresh this page, wait 3 seconds, and click Check. <br />
          4. Delete loading.tsx in fetch-6 folder, refresh this page, and click
          Check imadiately.
          <br />
          <Link href="6-fetch/case-2">Check {">"}</Link>
        </p>
      </section>
      <section>
        <h3>Case 3</h3>
        <p>
          What happen when do fetch in layout.tsx and page.ts?
          <br />
          <Link href="6-fetch/case-3">Check {">"}</Link>
        </p>
      </section>
      <br />
      <br />
    </div>
  );
}
