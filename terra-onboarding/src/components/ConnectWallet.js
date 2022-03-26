import { useWallet, WalletStatus } from "@terra-money/wallet-provider";
import React, { useEffect } from "react";
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

  // const checkExtension = (status, availableInstallTypes) => {
  //   if(status === WalletStatus.Installed && availableInstallTypes.includes('extension')) {
  //     console.log('Extension is installed');
  //   }
  // }
  
  // useEffect(() => {
  //   checkExtension(status, availableInstallTypes);
  // },[]);

  return (
    <div>
      <section>
        <pre>
          {JSON.stringify(
            {
              status,
              network,
              wallets,
              supportFeatures: Array.from(supportFeatures),
              availableConnectTypes,
              availableConnections,
              availableInstallTypes,
            },
            null,
            2
          )}
        </pre>
      </section>

      <div>
        {status === WalletStatus.WALLET_NOT_CONNECTED && (
          <>
            {availableInstallTypes.map((connectType) => (
              <button
                key={"install-" + connectType}
                onClick={() => install(connectType)}
                className="login-with-google-btn"
              >
                Install {connectType}
              </button>
            ))}
            <button
              onClick={() => connect(availableConnectTypes[0])}
              className="login-with-google-btn"
            >
              Login with Terra
            </button>
            <br />
          </>
        )}
        {status === WalletStatus.WALLET_CONNECTED && (
          <button
            onClick={() => disconnect()}
            className="login-with-google-btn"
          >
            Disconnect
          </button>
        )}
      </div>
    </div>
  );
}