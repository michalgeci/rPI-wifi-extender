import { TbTrash } from "react-icons/tb";

type SavedNetworkItemProps = {
  name: string;
  onClick?: (name: string) => void;
};

export const SavedNetworkItem = ({
  name,
  onClick = () => {},
}: SavedNetworkItemProps) => (
  <div>
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <p style={{ padding: 16, fontSize: 24, margin: 0, flex: 1 }}>{name}</p>
      <div
        style={{ width: 64, height: 64 }}
        onClick={() => {
          onClick(name);
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
