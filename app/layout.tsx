import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import SplashScreen from "./SplashScreen"; // Separate splash screen logic into a client component.

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "X-Ray-Analysis",
  description: "Analyze X-Ray images using AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster position="top-right" reverseOrder={false} />
        <SplashScreen>{children}</SplashScreen>
      </body>
    </html>
  );
}



// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";
// import { Toaster } from "react-hot-toast";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "X-Ray-Analysis",
//   description: "Analyze X-Ray images using AI",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <Toaster position="top-right" reverseOrder={false} />
//         {children}
//       </body>
//     </html>
//   );
// }
