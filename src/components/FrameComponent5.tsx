import { FunctionComponent } from "react";
import styles from "./FrameComponent5.module.css";

export type FrameComponent5Type = {
  className?: string;
};

const FrameComponent5: FunctionComponent<FrameComponent5Type> = ({
  className = "",
}) => {
  return (
    <header className={[styles.logoContainerWrapper, className].join(" ")}>
      <div className={styles.logoContainer}>
        <img
          className={styles.hmNewlogo1Icon}
          loading="lazy"
          alt=""
          src="/hm-newlogo-1@2x.png"
        />
        <div className={styles.navigation}>
          <div className={styles.menuItems}>
            <img className={styles.menuIcons} alt="" src="/menu-icons.svg" />
            <img className={styles.menuIcons1} alt="" src="/menu-icons.svg" />
            <img className={styles.menuIcons2} alt="" src="/menu-icons.svg" />
            <img
              className={styles.menuDividerIcon}
              alt=""
              src="/menu-divider.svg"
            />
            <div className={styles.menuLinks}>
              <img
                className={styles.linkDividerIcon}
                alt=""
                src="/link-divider.svg"
              />
              <div className={styles.homeLink}>
                <img
                  className={styles.homeIcon}
                  alt=""
                  src="/vector-748-1.svg"
                />
                <div className={styles.homeLabel}>
                  <a className={styles.home}>Home</a>
                </div>
              </div>
              <a className={styles.partners}>Partners</a>
              <a className={styles.roadMap}>Road Map</a>
              <a className={styles.team}>Team</a>
              <img
                className={styles.themeToggleIcon}
                alt=""
                src="/vector-747-1.svg"
              />
            </div>
            <img className={styles.themeIcon} alt="" src="/theme-icon.svg" />
          </div>
        </div>
        <div className={styles.leftContentWrapper}>
          <div className={styles.leftContent}>
            <div className={styles.topIconParent}>
              <img className={styles.topIcon} alt="" src="/vector-748-2.svg" />
              <div className={styles.topContent}>
                <div className={styles.interactiveElements}>
                  <img
                    className={styles.buttonIcon}
                    alt=""
                    src="/vector-748-3.svg"
                  />
                  <img
                    className={styles.buttonIcon1}
                    alt=""
                    src="/button.svg"
                  />
                </div>
              </div>
              <div className={styles.materialSymbolsLightdarkMoParent}>
                <img
                  className={styles.materialSymbolsLightdarkMoIcon}
                  alt=""
                  src="/materialsymbolslightdarkmoderounded.svg"
                />
                <img
                  className={styles.themeToggleIcon1}
                  alt=""
                  src="/menu-divider.svg"
                />
              </div>
              <img
                className={styles.bottomIcon}
                alt=""
                src="/vector-747-2.svg"
              />
            </div>
            <div className={styles.bottomContent}>
              <img
                className={styles.bottomButtonIcon}
                alt=""
                src="/vector-749-1.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent5;
