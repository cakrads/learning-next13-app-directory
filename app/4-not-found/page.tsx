import { notFound } from "next/navigation";
// import { FOLDER_APP } from "@constant";

export default async function Page() {
  notFound();

  /**
    exmaple use from documentation
    const user = await fetchUser(params.id);
    if (!user) {
      notFound();
    }
    https://beta.nextjs.org/docs/api-reference/notfound
   */

  // return (
  //   <div className="next-convention">
  //     <span>{FOLDER_APP.NOT_FOUND.PAGE}</span>
  //     <br />
  //     This page will not shown cause the not found will be shown file not-found.tsx.
  //   </div>
  // );
}
