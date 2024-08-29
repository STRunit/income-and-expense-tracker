import "@/styles/globals.css";
import { DefaultLayout } from "@/layout";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  const layoutRoutes = ["/dashboard", "/records"];

  const isLayoutRoute = layoutRoutes.includes(router.pathname);

  return isLayoutRoute ? (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  ) : (
    <Component {...pageProps} />
  )
}