import { ReactNode } from "react";

export function HeaderButton({
  text,
  icon,
  onClick,
}: {
  text: string;
  icon: ReactNode;
  onClick?: () => void;
}) {
  return (
    <div>
      <button
        className="genericButton clickableButton"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          fontSize: 16,
          width: "100%",
          backgroundColor: "#fafafa",
        }}
        onClick={() => onClick?.()}
      >
        <div>{text}</div>
        {icon}
      </button>
      <div className="delimiter" />
    </div>
  );
}
