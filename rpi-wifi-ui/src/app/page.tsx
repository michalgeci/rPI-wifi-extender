"use client";
import { HeaderButton } from "@/components/HeaderButton";
import { Loader } from "@/components/Loader";
import { NetworkInfo, NetworkItem } from "@/components/NetworkItem";
import { TbPlus, TbRefresh } from "react-icons/tb";

export default function Home() {
  const networks = [
    {
      name: "Nazov",
      secured: true,
      signal: 68,
      inUse: false,
    },
    {
      name: "Nazov2 asdas asd asd as s sadasd asdas dasd a",
      secured: false,
      signal: 33,
      inUse: true,
    },
  ];

  const networkClicked = (network: NetworkInfo) => {
    console.log(network);
    if (network.inUse) {
      return
    }

    if (!network.secured) {
      // TODO: Connect directly
    } else {
      // TODO: Ask for password
    }
  };

  return (
    <div style={{ width: "100%" }}>
      {/* Header buttons */}
      <HeaderButton text="Add Hidden Network" icon={<TbPlus size={24} />} />
      <HeaderButton text="Refresh" icon={<TbRefresh size={24} />} />

      {/* LOADER */}
      <Loader show={false} />

      {/* LIST OF NETWORKS */}
      <div className="scrollable">
        {networks.map((network) => (
          <NetworkItem
            key={network.name + network.signal}
            network={network}
            onClick={networkClicked}
          />
        ))}
      </div>
    </div>
  );
}
