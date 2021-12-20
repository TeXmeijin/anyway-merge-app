import React from "react";
import { VFXImg } from "react-vfx";
import Navbar from "~/components/atoms/navbar";
import styles from "~/styles/Home.module.css";

export const getLayout =
  (layout: Layout = (page) => page): Layout =>
  // eslint-disable-next-line react/display-name
  (page) => {
    return layout(
      <>
        <Navbar />
        {page}
        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <span className={styles.logo}>
              <VFXImg
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span>
          </a>
        </footer>
      </>
    );
  };
