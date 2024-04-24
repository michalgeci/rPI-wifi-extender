"use client";
import { usePathname } from "next/navigation";
import { Tab } from "@headlessui/react";
import { TbNetwork, TbList } from "react-icons/tb";
import { useRouter } from "next/navigation";
import { Fragment, ReactNode } from "react";

const StyledTab = ({ text, icon }: { text?: string; icon?: ReactNode }) => (
  <Tab as={Fragment}>
    {({ selected }) => (
      <button
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flex: 1,
          color: selected ? "#007bff" : "black",
          padding: 8,
          border: "none",
          outline: "none",
          backgroundColor: "#fafafa",
        }}
      >
        {icon}
        <div style={{ padding: 4 }}>{text}</div>
      </button>
    )}
  </Tab>
);

export default function Footer() {
  const pathname = usePathname();
  const router = useRouter();

  const selectedIndex = pathname === "/" ? 0 : 1;

  return (
    <Tab.Group
      selectedIndex={selectedIndex}
      onChange={(index) => {
        switch (index) {
          case 0:
            router.push("/");
            break;
          case 1:
            router.push("/savedNetworks");
            break;
        }
      }}
    >
      <Tab.List style={{ display: "flex", borderTop: "1px solid #d9d9d9" }}>
        <StyledTab text="Networks" icon={<TbNetwork size={24} />} />
        <StyledTab text="Saved" icon={<TbList size={24} />} />
      </Tab.List>
    </Tab.Group>
  );
}
