import { FOLDER_APP } from "@constant";
import { fetchData } from "@lib";
import Link from "next/link";

export default async function Page({ params }: { params: any }) {
  const result = await fetchData(params.dynamicSlug);
  if (!result) return null;

  /**
   * the return will still null, cause the asnyc has been done
   * it makes, the loading will show when promise happen.
   * More: https://beta.nextjs.org/docs/api-reference/file-conventions/loading
   */
  if (result === "dynamic-4") return null;

  return (
    <div className="next-convention">
      <span>{FOLDER_APP.LOADING.DYNAMIC.PAGE}</span>
      <br />
      Current Slug: {result}.
      <br />
      <br />
      <Link href="/3-loading">Back</Link>
    </div>
  );
}
