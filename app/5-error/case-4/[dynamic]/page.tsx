import { FOLDER_APP } from "@constant";
import { willError } from "@lib";

export default async function Page() {
  await willError();

  return (
    <div className="next-convention">
      <span>{FOLDER_APP.ERROR.CASE4.DYNAMIC.PAGE}</span>
      <br />
      Will never shown cause willError()
      <br />
      <br />
    </div>
  );
}
