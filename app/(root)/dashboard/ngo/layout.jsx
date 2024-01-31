import Sidebar from "../company/sidebar";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        
        {/* <Sidebar /> */}
        {children}
      </body>
    </html>
  );
}
