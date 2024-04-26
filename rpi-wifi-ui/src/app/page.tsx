"use client";
import { HeaderButton } from "@/components/HeaderButton";
import { Loader } from "@/components/Loader";
import { NetworkInfo, NetworkItem } from "@/components/NetworkItem";
import { WifiDialog } from "@/components/WifiDialog";
import { useState } from "react";
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

  const [wifiDialogVisible, setWifiDialogVisible] = useState(false);
  const [connectToHiddenWifi, setConnectToHiddenWifi] = useState(false);

  const networkClicked = (network: NetworkInfo) => {
    console.log(network);
    if (network.inUse) {
      return;
    }

    setConnectToHiddenWifi(false);

    if (!network.secured) {
      // TODO: Connect directly
    } else {
      setWifiDialogVisible(true);
    }
  };

  return (
    <div style={{ width: "100%" }}>
      {/* Header buttons */}
      <HeaderButton
        text="Add Hidden Network"
        onClick={() => {
          setConnectToHiddenWifi(true);
          setWifiDialogVisible(true);
        }}
        icon={<TbPlus size={24} />}
      />
      <HeaderButton
        onClick={() => {
          // TODO: refresh list
        }}
        text="Refresh"
        icon={<TbRefresh size={24} />}
      />

      {/* LOADER */}
      <Loader show={false} />

      {/* WIFI DIALOG */}
      <WifiDialog
        show={wifiDialogVisible}
        hide={() => setWifiDialogVisible(false)}
        hiddenWifi={connectToHiddenWifi}
        onConnect={(ssid, password) => {
          console.log(ssid, password);

          // TODO: Handle connection
          if (ssid && password) {
            // Secured, hidden
          } else if (ssid && !password) {
            // Unsecured, hidden
          } else if (!ssid && password) {
            // Secured, visible
          } else {
            alert("ERROR DATA");
          }
        }}
      />

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
