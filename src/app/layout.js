import "./globals.css";
import { livvic } from "@/utils/fonts";

export const metadata = {
  title: "Avillion Farms",
  description: "Producing high-quality agriculture farms all over Pan India",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={livvic.className}>{children}</body>
    </html>
  );
}
