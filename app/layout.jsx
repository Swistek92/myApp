import ReactQueryWrappper from "./ReactQueryWrappper";

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head />
      <body>
        <ReactQueryWrappper>{children}</ReactQueryWrappper>
      </body>
    </html>
  );
}
