import { ConnectWallet } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";

const stakingContractAddress = "0x788440FeA8673600428c2F7acd0226DB6b58CA8C";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
         Welcome to the NFTEarth Staking Rewards Program!
        </h1>

        <p className={styles.description}>
          Get started by connecting your wallet and making sure you have your Balancer Pool Tokens from Balancer.
          <code className={styles.code}>pages/_app.js</code>, then modify the{" "}
          <code className={styles.code}>pages/index.js</code> file!
        </p>

        <div className={styles.connect}>
          <ConnectWallet />
        </div>

        <div className={styles.grid}>
          <a href="https://nftearth.exchange/" className={styles.card}>
            <h2>NFTEarth &rarr;</h2>
            <p>
              The NFTEarth application - head here to check out the platform and learn about the protocol building the future of NFTFi
            </p>
          </a>

          <a href="https://portal.arbitrum.io" className={styles.card}>
            <h2>Arbitrum One Portal &rarr;</h2>
            <p>
              Check out all the awesome apps already on the leading Layer2 network Arbitrum!
            </p>
          </a>

          <a
            href="https://app.balancer.fi/#/arbitrum/swap"
            className={styles.card}
          >
            <h2>Balancer &rarr;</h2>
            <p>
              Head to the Balancer DEX on Arbitrum to swap.
            </p>
          </a>
        </div>
      </main>
    </div>
  );
}
