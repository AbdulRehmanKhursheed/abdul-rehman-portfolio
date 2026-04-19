"use client";

import { usePathname } from "next/navigation";
import Header from "./header.component";

export default function ConditionalHeader() {
  const pathname = usePathname();
  if (pathname.startsWith("/noor")) return null;
  return <Header />;
}
