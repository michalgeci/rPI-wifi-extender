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
  const [networkSsid, setNetworkSsid] = useState("");
  const [networkName, setNetworkName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onClick = (name: string, ssid: string) => {
    setNetworkName(name);
    setNetworkSsid(ssid)
    setDialogVisible(true);
  };

  return (
    <div className="scrollable" style={{ width: "100%" }}>
      <Loader show={isLoading}/>
      <MDialog
        title={networkSsid}
        description={`Do you really want to delete ${networkSsid}?`}
        show={dialogVisible}
        hide={() => setDialogVisible(false)}
        buttons={[{ label: "Cancel"}, { label: "DELETE", warning: true, onClick: () => {
          // TODO:
          // remove by name
          // networkName
          // setIsLoading(true)
        } }]}
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
