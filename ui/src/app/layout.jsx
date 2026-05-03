import "./globals.css";
import Footer from "./Components/Footer";
import AuthProvider from "@/context/AuthProvider";
import { Toaster } from "sonner";
import ConditionalHeader from "@/app/Components/ConditionalHeader";

export const metadata = {
  title: "Sakthi Seeds",
  description: "Seed business website",
};

 {/* <Toaster position="top-right" /> */}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col"  >
        <Toaster position="top-right" />
        <AuthProvider>
          <ConditionalHeader />
          <main className="flex-1">{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}