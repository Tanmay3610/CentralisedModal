"use client";
import ModalProvider from "@/Context/Modal/Provider";
import Modal from "@/components/modal/Modal";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body style={{margin: "0px", padding: "0px"}}>
        <ModalProvider>
          <Modal />
          {children}x
        </ModalProvider>
      </body>
    </html>
  );
}
