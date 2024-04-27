"use client";
import { HeaderButton } from "@/components/HeaderButton";
import { Loader } from "@/components/Loader";
import { NetworkInfo, NetworkItem } from "@/components/NetworkItem";
import { WifiDialog } from "@/components/WifiDialog";
import { useDataFetch, useDataPost, useUpConnection } from "@/hooks/useDataFetch";
import axios from "axios";
import { useState } from "react";
import { TbPlus, TbRefresh } from "react-icons/tb";

export default function Home() {
  const [wifiDialogVisible, setWifiDialogVisible] = useState(false);
  const [connectToHiddenWifi, setConnectToHiddenWifi] = useState(false);
  const [ssidToConnect, setSsidToConnect] = useState("");
  const [isConnectingUp, setIsConnectingUp] = useState(false)

  const networkClicked = (network: NetworkInfo) => {
    console.log(network);
    if (network.inUse) {
      return;
    }

    // Try to connect for "known network"
    setIsConnectingUp(true)
    axios.get("api/connectToExisting?name=" + network.name)
    .then(() => {
      // On Success
      setIsConnectingUp(false)
    })
    .catch(() => {
      // On Fail

      // Hide Loader
      setIsConnectingUp(false)

      // Set wifi params for dialog
      setConnectToHiddenWifi(false);
      setSsidToConnect(network.name);
  
      if (!network.secured) {
        connectToNetwork({ ssid: network.name, password: "", hidden: false });
      } else {
        setWifiDialogVisible(true);
      }
    }).finally(() => {
      refetchNetworks();
    })
  };

  const {
    data: availableNetworks,
    refetch: refetchNetworks,
    isLoading: isLoadingNetworks,
  } = useDataFetch<NetworkInfo[]>("api/getNetworks");
  console.log(availableNetworks);

  const { refetch: connectToNetwork, isLoading: connecting } = useDataPost(
    "api/connect",
    () => {
      refetchNetworks();
    }
  );

  const isLoading = isLoadingNetworks || connecting || isConnectingUp;

  return (
    <div className="secondaryContainer">
      {/* Refresh Button */}
      <HeaderButton
        onClick={() => {
          refetchNetworks();
        }}
        text="Refresh"
        icon={<TbRefresh size={24} />}
      />

      {/* Header buttons */}
      <HeaderButton
        text="Add Hidden Network"
        onClick={() => {
          // Show dialog for connect to hidden wifi
          setConnectToHiddenWifi(true);
          setWifiDialogVisible(true);
        }}
        icon={<TbPlus size={24} />}
      />

      {/* LOADER */}
      <Loader show={isLoading} />

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
            connectToNetwork({ ssid: ssid, password: password, hidden: true });
          } else if (ssid && !password) {
            // Unsecured, hidden
            connectToNetwork({ ssid: ssid, password: "", hidden: true });
          } else if (!ssid && password) {
            // Secured, visible
            connectToNetwork({
              ssid: ssidToConnect,
              password: password,
              hidden: false,
            });
          } else {
            alert("ERROR DATA");
          }
        }}
      />

      {/* LIST OF NETWORKS */}
      <div className="scrollable">
        {availableNetworks?.map((network) => (
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
