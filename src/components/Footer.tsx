import { FunctionComponent } from "react";
import styles from "./Footer.module.css";

export type FooterType = {
  className?: string;
};

const Footer: FunctionComponent<FooterType> = ({ className = "" }) => {
  return (
    <section className={[styles.footer, className].join(" ")}>
      <div className={styles.footerContent}>
        <h1 className={styles.h1}>THE GAME</h1>
        <div className={styles.footerColumns}>
          <h1 className={styles.h11}>TOURNAMENT</h1>
          <div className={styles.brandingWrapper}>
            <h1 className={styles.branding}>STORY</h1>
          </div>
          <div className={styles.parent}>
            <h1 className={styles.h12}>VARIANTS AND WEAPONS</h1>
            <div className={styles.frameParent}>
              <img
                className={styles.frameChild}
                alt=""
                src="/frame-47580@2x.png"
              />
              <h1 className={styles.h13}>BLOGS</h1>
              <div className={styles.footerLogo} />
            </div>
          </div>
        </div>
        <footer className={styles.footerSocialContainerParent}>
          <div className={styles.footerSocialContainer}>
            <div className={styles.footerSocialContent}>
              <div className={styles.footerSocialIcons}>
                <h1 className={styles.h14}>PRIVACY POLICY</h1>
                <h1 className={styles.h15}>ABOUT US</h1>
              </div>
              <div className={styles.footerCopyright}>
                <h1 className={styles.copyright2022}>
                  Copyright 2022 © Nakamoto Games
                </h1>
              </div>
            </div>
          </div>
          <div className={styles.backToTopContainer}>
            <h1 className={styles.upToTop}>UP TO TOP</h1>
            <h1 className={styles.h16}>👉</h1>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
