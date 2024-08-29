import "@/styles/globals.css";
import { DefaultLayout } from "@/layout";
import { useRouter } from "next/router";
import { createContext, useRef } from "react";

export const DialogContext = createContext()

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const recordBtnRef = useRef()

  const layoutRoutes = ["/dashboard", "/records"];

  const isLayoutRoute = layoutRoutes.includes(router.pathname);

  return isLayoutRoute ? (
    <DialogContext.Provider value={{ recordBtnRef }}>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </DialogContext.Provider>
  ) : (
    <Component {...pageProps} />
  )
}