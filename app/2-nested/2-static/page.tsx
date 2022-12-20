import { FOLDER_APP } from "@constant";

export default function Page() {
  return (
    <div className="next-convention">
      <span>{FOLDER_APP.NESTED.STATIC.PAGE}</span>
      <div>
        the path /2-nested/2-static will never shown cause the route will always
        to 1-dynamic.
      </div>
    </div>
  );
}
