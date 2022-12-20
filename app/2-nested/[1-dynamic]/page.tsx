import { FOLDER_APP } from "@constant";

export type TLayoutProps = {
  params?: any;
  children?: React.ReactNode;
};

export default function Page({ params }: TLayoutProps) {
  return (
    <div className="next-convention">
      <span>
        {FOLDER_APP.NESTED.DYNAMIC.PAGE} | Current path: {params["1-dynamic"]}.
      </span>
      <br />
      The `Dynamic Path` can also get in page from props.params. <br />
      But, in `template.ts`, I can`t get props.params (version 13.0.6).
      <br />
    </div>
  );
}
