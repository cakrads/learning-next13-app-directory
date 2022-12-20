import Link from "next/link";
import { FOLDER_APP } from "@constant";

export default async function Page() {
  return (
    <div className="next-convention">
      <span>{FOLDER_APP.NOT_FOUND_DEEPER.PAGE}</span>
      <br />
      <section>
        <h3>Case 1</h3>
        <p>
          Has not-found.ts inside case-1 folder, so which Not Found will be
          shown, <br />
          from {FOLDER_APP.NOT_FOUND_DEEPER.CASE1.NOT_FOUND} or{" "}
          {FOLDER_APP.NOT_FOUND_DEEPER.NOT_FOUND}
          <br />
          <Link href="4-not-found-deeper/case-1">Check {">"}</Link>
        </p>
      </section>
      <section>
        <h3>Case 2</h3>
        <p>
          What happen when call notFound() in layout.ts?
          <br />
          <Link href="4-not-found-deeper/case-2">Check {">"}</Link>
        </p>
      </section>
      <section>
        <h3>Case 3</h3>
        <p>
          What happen when call notFound() in template.ts?
          <br />
          <Link href="4-not-found-deeper/case-3">Check {">"}</Link>
        </p>
      </section>
      <br />
      <br />
    </div>
  );
}
