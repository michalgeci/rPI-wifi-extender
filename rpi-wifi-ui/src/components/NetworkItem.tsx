import {
  MdSignalWifi1Bar,
  MdSignalWifi2Bar,
  MdSignalWifi3Bar,
  MdSignalWifi4Bar,
  MdSignalWifi1BarLock,
  MdSignalWifi2BarLock,
  MdSignalWifi3BarLock,
  MdSignalWifi4BarLock,
} from "react-icons/md";

export type NetworkInfo = {
  name: string;
  secured: boolean;
  signal: number;
  inUse: boolean;
};

type NetworkInfoProps = {
  network: NetworkInfo;
  onClick: (network: NetworkInfo) => void;
};

const WifiSignal = ({
  signal,
  secured,
}: {
  signal: number;
  secured: boolean;
}) => {
  const size = 28;
  if (secured) {
    if (signal < 25) {
      return <MdSignalWifi1BarLock size={size} />;
    } else if (signal < 50) {
      return <MdSignalWifi2BarLock size={size} />;
    } else if (signal < 75) {
      return <MdSignalWifi3BarLock size={size} />;
    } else {
      return <MdSignalWifi4BarLock size={size} />;
    }
  } else {
    if (signal < 25) {
      return <MdSignalWifi1Bar size={size} />;
    } else if (signal < 50) {
      return <MdSignalWifi2Bar size={size} />;
    } else if (signal < 75) {
      return <MdSignalWifi3Bar size={size} />;
    } else {
      return <MdSignalWifi4Bar size={size} />;
    }
  }
};

export const NetworkItem = ({ network, onClick }: NetworkInfoProps) => (
  <div
    style={{
      backgroundColor: network.inUse ? "#bae0ff" : "transparent",
    }}
  >
    <div
      className="clickItem"
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: 16,
      }}
      onClick={() => onClick(network)}
    >
      <WifiSignal secured={network.secured} signal={network.signal} />

      <p
        style={{
          paddingTop: 16,
          paddingBottom: 16,
          paddingLeft: 12,
          fontSize: 24,
          margin: 0,
          flex: 1,
        }}
      >
        {network.name}
      </p>
    </div>

    {/* DIVIDER */}
    <div style={{ borderTop: "1px solid #d9d9d9", marginLeft: 16 }} />
  </div>
);
