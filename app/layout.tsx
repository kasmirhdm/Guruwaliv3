import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "GuruWali V3",
    template: "%s | GuruWali V3",
  },
  description:
    "Ruang kerja guru untuk mengelola perangkat ajar dan dokumen pembelajaran.",
  applicationName: "GuruWali V3",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f5f7fb",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
