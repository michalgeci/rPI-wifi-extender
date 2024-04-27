"use client";
import { HeaderButton } from "@/components/HeaderButton";
import { Loader } from "@/components/Loader";
import { MDialog } from "@/components/MDialog";
import { SavedNetworkItem } from "@/components/SavedNetworkItemProps";
import { useDataFetch, useDeleteConnection } from "@/hooks/useDataFetch";
import { useState } from "react";
import { TbRefresh } from "react-icons/tb";

export default function SavedNetworks() {
  const [dialogVisible, setDialogVisible] = useState(false);
  const [networkName, setNetworkName] = useState("");

  const {
    data,
    refetch,
    isLoading: loadingList,
  } = useDataFetch<string[]>("/api/getSavedConnections"); // ?showAll=true

  const { refetch: deleteConnection, isLoading: deleting } =
    useDeleteConnection("/api/delete", () => {
      // refetch networks on finish
      refetch();
    });

  const isLoading = loadingList || deleting;

  const onClick = (name: string) => {
    setNetworkName(name);
    setDialogVisible(true);
  };

  return (
    <div className="secondaryContainer">
      {/* Refresh Button */}
      <HeaderButton
        onClick={() => {
          refetch();
        }}
        text="Refresh"
        icon={<TbRefresh size={24} />}
      />
      <Loader show={isLoading} />
      <MDialog
        title={networkName}
        description={`Do you really want to delete ${networkName}?`}
        show={dialogVisible}
        hide={() => setDialogVisible(false)}
        buttons={[
          { label: "Cancel" },
          {
            label: "DELETE",
            warning: true,
            onClick: () => {
              deleteConnection(networkName);
            },
          },
        ]}
      />

      <div className="scrollable">
        {data?.map((network) => (
          <SavedNetworkItem key={network} name={network} onClick={onClick} />
        ))}
      </div>
    </div>
  );
}
