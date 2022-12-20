import Link from "next/link";
import { FOLDER_APP } from "@constant";

export default async function Page() {
  return (
    <div className="next-convention">
      <span>{FOLDER_APP.ERROR.PAGE}</span>
      <br />
      <section>
        <h3>Case 1</h3>
        <p>
          Simple Case, Error in Client
          <br />
          <Link href="5-error/case-1">Check {">"}</Link>
        </p>
      </section>
      <section>
        <h3>Case 2</h3>
        <p>
          No error.tsx in folder case-2.
          <br />
          <Link href="5-error/case-2">Check {">"}</Link>
        </p>
      </section>
      <section>
        <h3>Case 3</h3>
        <p>
          What happen in server, when the fetch error in static path.
          <br />
          <Link href="5-error/case-3">Check {">"}</Link>
        </p>
      </section>
      <section>
        <h3>Case 4</h3>
        <p>
          What happen in server, when the fetch error in dynamic path.
          <br />
          <Link href="5-error/case-4">Check {">"}</Link>
        </p>
      </section>
      {/* <section>
        <h3>Case 2</h3>
        <p>
          What happen when call notFound() in layout.tsx?
          <br />
          <Link href="4-not-found-deeper/case-2">Check {">"}</Link>
        </p>
      </section>
      <section>
        <h3>Case 3</h3>
        <p>
          What happen when call notFound() in template.tsx?
          <br />
          <Link href="4-not-found-deeper/case-3">Check {">"}</Link>
        </p>
      </section> */}
      <br />
      <br />
    </div>
  );
}
