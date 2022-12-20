import { FOLDER_APP } from "@constant";
import { doLoading } from "@lib";
import Link from "next/link";

export default async function Page() {
  await doLoading();

  return (
    <div className="next-convention">
      <span>{FOLDER_APP.LOADING_DEEPER.CASE1.PAGE}</span>
      <br />
      The loading in file {FOLDER_APP.LOADING_DEEPER.CASE1.LOADING} has shown
      and replace The loading in file {FOLDER_APP.LOADING_DEEPER.LOADING}.
      <br />
      <br />
      <b>Note 1:</b>
      <br />
      I try to access this pages twice, but the loading is shown in the first
      time only.
      <br />
      IMO, it`s cause the page not dynamic and has been load from server,
      <br />
      so the server not need to fetch it and shown loading. I will try more in
      next example when discusing fetch data.
      <br />
      <br />
      <b>Note 2:</b>
      <br />
      When I try it from the first time, directly after load d page, sometimes,
      the loading from {FOLDER_APP.LOADING_DEEPER.LOADING} still shown, then
      imadiatly replaced with {FOLDER_APP.LOADING_DEEPER.CASE1.LOADING}. Why
      this happen?
      <br />
      <br />
      <br />
      <Link href="/3-loading-deeper">Back</Link>
    </div>
  );
}
