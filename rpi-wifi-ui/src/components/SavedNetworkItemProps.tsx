import { TbTrash } from "react-icons/tb";

type SavedNetworkItemProps = {
  name: string;
  ssid: string;
  onClick?: (name: string, ssid: string) => void;
};

export const SavedNetworkItem = ({
  name,
  ssid,
  onClick = () => {},
}: SavedNetworkItemProps) => (
  <div style={{ width: "100%" }}>
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <p style={{ padding: 16, fontSize: 24, margin: 0, flex: 1 }}>{ssid}</p>
      <div
        style={{ width: 64, height: 64 }}
        onClick={() => {
          onClick(name, ssid);
        }}
      >
        <TbTrash
          className="deleteButton"
          style={{
            padding: 8,
            margin: 8,
            borderRadius: 8,
          }}
          size={32}
          color="white"
        />
      </div>
    </div>

    {/* DIVIDER */}
    <div style={{ borderTop: "1px solid #d9d9d9", marginLeft: 16 }} />
  </div>
);
