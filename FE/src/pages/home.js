import Image from "next/image";
import { Inter } from "next/font/google";
import { DefaultLayout } from "@/layout/defaultLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <DefaultLayout></DefaultLayout>;
}
