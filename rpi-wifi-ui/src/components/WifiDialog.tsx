import { Dialog } from "@headlessui/react";
import { CSSProperties, useState } from "react";

export type DialogParams = {
  show: boolean;
  hide: () => void;
  hiddenWifi: boolean;
  onConnect: (ssid: string, password: string) => void;
};

export function WifiDialog({
  show,
  hide,
  hiddenWifi,
  onConnect,
}: DialogParams) {
  const [ssid, setSsid] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const closeDialog = () => {
    hide();
    setSsid("");
    setPassword("");
  };

  return (
    <Dialog style={styles.dialog} open={show} onClose={() => closeDialog()}>
      <Dialog.Panel style={styles.dialogPanel}>
        <Dialog.Title style={{ textAlign: "center" }}>
          {"Connect to Wi-Fi"}
        </Dialog.Title>
        {hiddenWifi && (
          <input
            style={styles.inputStyle}
            placeholder="Network Name"
            value={ssid}
            onChange={(e) => setSsid(e.target.value)}
          />
        )}
        <input
          style={styles.inputStyle}
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          autoComplete="new-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div style={styles.showPasswordBox}>
          <input
            type="checkbox"
            style={styles.checkbox}
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
          />
          <div>&nbsp;Show Password</div>
        </div>

        {/* DIVIDER */}
        <div style={styles.divider}>
          {/* CANCEL BUTTON */}
          <button
            className="genericButton clickableButton"
            style={{
              flex: 1,
              borderRight: "1px solid #d9d9d9",
            }}
            onClick={() => {
              closeDialog();
            }}
          >
            Cancel
          </button>

          {/* CONNECT BUTTON */}
          <button
            className="genericButton clickableButton"
            style={{
              flex: 1,
            }}
            onClick={() => {
              onConnect(ssid, password);
              closeDialog();
            }}
          >
            CONNECT
          </button>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
}

const styles: { [key: string]: CSSProperties } = {
  inputStyle: {
    padding: 8,
    borderRadius: 4,
    backgroundColor: "#d6e4ff",
    fontSize: 18,
    margin: 8,
    border: "none",
  },
  checkbox: {
    width: 24,
    height: 24,
  },
  dialog: {
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
  },
  dialogPanel: {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "80%",
    borderRadius: 16,
  },
  divider: {
    display: "flex",
    flexDirection: "row",
    borderTop: "1px solid #d9d9d9",
  },
  showPasswordBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 8,
    marginBottom: 8,
  },
};
