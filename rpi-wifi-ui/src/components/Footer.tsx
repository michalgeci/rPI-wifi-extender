"use client"
import { usePathname } from 'next/navigation';
import { SafeArea } from "antd-mobile";

export default function Footer() {
  const pathname = usePathname()

  return (
    <div>{pathname}
      <SafeArea position="bottom"/>
    </div>
  );
}
