import Link from "next/link";
import { FOLDER_APP } from "@constant";
import { doLoading } from "@lib";

export default async function Page() {
  await doLoading();

  return (
    <div className="next-convention">
      <span>{FOLDER_APP.LOADING_DEEPER.PAGE}</span>
      <br />
      <section>
        <h3>Case 1</h3>
        <p>
          Has Loading.ts inside case-1 folder, so which Loading will be shown,
          <br />
          the loading from `3-loading-deeper` or `3-loading-deeper/case-1`?
          <br />
          <Link href="3-loading-deeper/case-1">Check {">"}</Link>
        </p>
      </section>
      <section>
        <h3>Case 2</h3>
        <p>
          What happen when do fetch in layout.ts.
          <br />
          <Link href="3-loading-deeper/case-2">Check {">"}</Link>
        </p>
      </section>
      <section>
        <h3>Case 3</h3>
        <p>
          What happen when do fetch in layout.ts and page.ts.
          <br />
          <Link href="3-loading-deeper/case-3">Check {">"}</Link>
        </p>
      </section>
      <br />
      <br />
    </div>
  );
}
