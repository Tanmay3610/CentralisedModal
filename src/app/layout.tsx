import ModalProvider from "@/context/ModalContext";
import Modal from "@/components/modal/Modal";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body style={{margin: "0px", padding: "0px"}}>
        <ModalProvider>
          <Modal />
          {children}
        </ModalProvider>
      </body>
    </html>
  );
}
