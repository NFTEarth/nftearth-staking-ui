import { ConnectKitButton } from "connectkit";

export const ConnectButton = ({ classNames }) => {
  return (
    <ConnectKitButton.Custom>
      {({ isConnected, isConnecting, show, address, ensName }) => {
        if (isConnecting) {
          return;
        }
        return (
          <>
            <button
              onClick={show}
              className={`px-2 h-8 flex items-center box-content border hover:border-gray-500 md:hidden ${classNames && classNames}`}
            >
              {isConnected
                ? ensName
                  ? ensName.length > 10
                    ? ensName.slice(0, 10) + "..."
                    : ensName
                  : address.slice(2, 8)
                : "Connect Wallet"}
            </button>
            <button
              onClick={show}
              className={`px-2 h-8 flex items-center box-content border hover:border-gray-500 hidden md:inline ${
                classNames && classNames
              }`}
            >
              {isConnected
                ? ensName
                  ? ensName.length > 18
                    ? ensName.slice(0, 18) + "..."
                    : ensName
                  : address.slice(0, 6) + "..." + address.slice(address.length - 6, address.length)
                : "Connect Wallet"}
            </button>
          </>
        );
      }}
    </ConnectKitButton.Custom>
  );
};
