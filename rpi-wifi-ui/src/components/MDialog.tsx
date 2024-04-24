import { Dialog } from "@headlessui/react";

export type DialogButtons = {
  label: string;
  warning?: boolean;
  onClick?: () => void;
};

export type DialogParams = {
  title: string;
  description: string;
  show: boolean;
  hide: () => void;
  buttons: DialogButtons[];
};

export function MDialog({
  title,
  description,
  show,
  hide,
  buttons = [],
}: DialogParams) {
  return (
    <Dialog
      style={{
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        display: "flex",
        backgroundColor: "#00000066",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
      open={show}
      onClose={() => hide()}
    >
      <Dialog.Panel
        style={{
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "80%",
          borderRadius: 16,
        }}
      >
        <Dialog.Title style={{ textAlign: "center" }}>{title}</Dialog.Title>
        <Dialog.Description style={{ textAlign: "center" }}>
          {description}
        </Dialog.Description>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            borderTop: "1px solid #d9d9d9",
          }}
        >
          {buttons.map((value, index) => (
            <button
              key={value.label}
              className={`genericButton ${
                value.warning ? "deleteButtonSecondary" : "clickableButton"
              }`}
              style={{
                flex: 1,
                borderRight: index < buttons.length - 1 ? "1px solid #d9d9d9" : "",
              }}
              onClick={() => {
                value.onClick?.();
                hide();
              }}
            >
              {value.label}
            </button>
          ))}
        </div>
      </Dialog.Panel>
    </Dialog>
  );
}
