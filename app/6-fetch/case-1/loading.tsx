import { FOLDER_APP } from "@constant";

export default function Loading() {
  return (
    <div className="next-convention">
      <span>{FOLDER_APP.FETCH.CASE1.LOADING}</span>
      Loading from case-1 ...
      <br />
    </div>
  );
}
