import { useWallet, WalletStatus } from "@terra-money/wallet-provider";
import React from "react";
import "../App.css";

export default function ConnectWallet() {
  const {
    status,
    network,
    wallets,
    availableConnectTypes,
    availableInstallTypes,
    availableConnections,
    supportFeatures,
    connect,
    install,
    disconnect,
  } = useWallet();

  return (
    <div>
        {status === WalletStatus.WALLET_NOT_CONNECTED && (
          <>
            {availableInstallTypes.map((connectType) => (
              <button
                key={"install-" + connectType}
                onClick={() => install(connectType)}
                className="super-cool-button"
              >
                Install {connectType}
              </button>
            ))}
            <button
              onClick={() => connect(availableConnectTypes[0])}
              className="super-cool-button"
            >
              Login with Terra
            </button>
            <br />
          </>
        )}
        {status === WalletStatus.WALLET_CONNECTED && (
          <button
            onClick={() => disconnect()}
            className="super-cool-button"
          >
            Disconnect
          </button>
        )}
    </div>
  );
}
