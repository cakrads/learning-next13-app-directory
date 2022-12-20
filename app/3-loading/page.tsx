import Link from "next/link";
import { FOLDER_APP } from "@constant";
import { doLoading } from "@lib";

export default async function Page() {
  await doLoading();

  return (
    <div className="next-convention">
      <span>{FOLDER_APP.LOADING.PAGE}</span>
      <br />
      Go to : <Link href="3-loading/dynamic-1">Dynamic 1</Link> |{" "}
      <Link href="3-loading/dynamic-2">Dynamic 2</Link> |{" "}
      <Link href="3-loading/dynamic-3">Dynamic 3</Link> |{" "}
      <Link href="3-loading/dynamic-4">Dynamic 4</Link>
      <br />
      <br />
    </div>
  );
}
