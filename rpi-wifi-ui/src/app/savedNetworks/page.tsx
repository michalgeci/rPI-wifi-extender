"use client";
import { Loader } from "@/components/Loader";
import { MDialog } from "@/components/MDialog";
import { SavedNetworkItem } from "@/components/SavedNetworkItemProps";
import { useState } from "react";

export default function SavedNetworks() {
  const networks = [
    {
      name: "test123x",
      ssid: "test123",
    },
    {
      name: "test123x1",
      ssid: "test123",
    },
    {
      name: "test123x2",
      ssid: "test123",
    },
    {
      name: "test123x3",
      ssid: "test123",
    },
    {
      name: "test123x4",
      ssid: "test123",
    },
    {
      name: "test123x5",
      ssid: "test123",
    },
    {
      name: "test123x6",
      ssid: "test123",
    },
    {
      name: "test123x7",
      ssid: "test123",
    },
    {
      name: "test123x8",
      ssid: "test123",
    },
    {
      name: "test123x9",
      ssid: "test123",
    },
    {
      name: "test123xq",
      ssid: "test123",
    },
    {
      name: "test123xw",
      ssid: "test123",
    },
    {
      name: "test123xe",
      ssid: "test123",
    },
  ];

  const [dialogVisible, setDialogVisible] = useState(false);
  const [networkName, setNetworkName] = useState("");

  const onClick = (name: string, ssid: string) => {
    setNetworkName(ssid);
    setDialogVisible(true);
    // TODO: delete network by name
  };

  return (
    <div className="scrollable" style={{ width: "100%" }}>
      <Loader show={false}/>
      <MDialog
        title={networkName}
        description={`Do you really want to delete ${networkName}?`}
        show={dialogVisible}
        hide={() => setDialogVisible(false)}
        buttons={[{ label: "Cancel" }, { label: "DELETE", warning: true }]}
      />
      {networks.map((network) => (
        <SavedNetworkItem
          key={network.name}
          name={network.name}
          ssid={network.ssid}
          onClick={onClick}
        />
      ))}
    </div>
  );
}
