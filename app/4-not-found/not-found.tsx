import { FOLDER_APP } from "@constant";

export default function NotFound() {
  return (
    <div className="next-convention">
      <>
        <span>{FOLDER_APP.NOT_FOUND.NOT_FOUND}</span>
        The not-found file is used to render UI when the notFound function is
        thrown within a route segment. <br />
        Remember, this to handle if &#39;data not-found&#39; not &#39;page
        not-found&#39;.
      </>
      <br />
      <br />
    </div>
  );
}
