import { FOLDER_APP } from "@constant";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <div className="next-convention">
          <span>{FOLDER_APP.LAYOUT}</span>
          {children}
        </div>
      </body>
    </html>
  );
}
