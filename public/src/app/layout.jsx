import { title } from "process";
import "./globals.css";


export const metadata = {
  title: "Airbnb Clone",
}



export default function RootLayout({children}) {
  return <html lang="en">
    <body>
      {children}
    </body>
  </html>
}