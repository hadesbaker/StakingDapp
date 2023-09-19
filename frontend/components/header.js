import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useAccount, useConnect, useDisconnect } from "wagmi";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { isConnected } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();

  useEffect(() => {
    if (!isConnected) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [isConnected]);

  return (
    <section className={styles.header}>
      <section className={styles.header_logoSection}>
        <Image src="/image.png" width={50} height={50} alt="Hades" />
        <h1 className={styles.title}> Hades Staking</h1>
      </section>

      <section className={styles.header_btn}>
        {!isLoggedIn ? (
          <button className={styles.connect_btn} onClick={disconnect}>
            DISCONNECT WALLET
          </button>
        ) : (
          <>
            {connectors.map((connector) => (
              <button
                disable={!connector.ready}
                key={connector.id}
                onClick={() => connect({ connector })}
                className={styles.connectBtn}
              >
                CONNECT WALLET
              </button>
            ))}
          </>
        )}
      </section>
    </section>
  );
}
