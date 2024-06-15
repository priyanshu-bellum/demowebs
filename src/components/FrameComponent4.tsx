import { FunctionComponent } from "react";
import styles from "./FrameComponent4.module.css";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.marketDownloadParent, className].join(" ")}>
      <div className={styles.marketDownload}>
        <img
          className={styles.marketDownloadChild}
          loading="lazy"
          alt=""
          src="/rectangle-3.svg"
        />
        <h1 className={styles.marketplace}>Marketplace</h1>
      </div>
      <button className={styles.marketDownload1}>
        <img
          className={styles.marketDownloadItem}
          alt=""
          src="/rectangle-3-1.svg"
        />
        <b className={styles.downloadGame}>Download Game</b>
      </button>
      <div className={styles.vectorParent}>
        <img className={styles.frameChild} alt="" src="/rectangle-3-2.svg" />
        <img
          className={styles.ouiarrowUpIcon}
          loading="lazy"
          alt=""
          src="/ouiarrowup@2x.png"
        />
      </div>
      <div className={styles.offerContentParent}>
        <div className={styles.offerContent}>
          <img
            className={styles.offerContentChild}
            alt=""
            src="/group-1261154844@2x.png"
          />
          <div className={styles.offerTitle}>
            <h1 className={styles.whatWeOffer}>what we offer?</h1>
            <div className={styles.offerDetails}>
              <div className={styles.wrapperDetailDivider}>
                <img
                  className={styles.detailDividerIcon}
                  alt=""
                  src="/detail-divider.svg"
                />
              </div>
              <img
                className={styles.offerIcons}
                alt=""
                src="/offer-icons.svg"
              />
              <img
                className={styles.offerIcons1}
                alt=""
                src="/offer-icons1.svg"
              />
              <img
                className={styles.offerIcons2}
                alt=""
                src="/offer-icons.svg"
              />
              <img
                className={styles.offerIcons3}
                alt=""
                src="/offer-icons2.svg"
              />
              <img
                className={styles.offerDetailsChild}
                alt=""
                src="/frame-1000004691.svg"
              />
              <div className={styles.vectorGroup}>
                <img
                  className={styles.frameItem}
                  alt=""
                  src="/rectangle-40385@2x.png"
                />
                <div className={styles.playButtonContainer}>
                  <div className={styles.wrapperRectangle40386}>
                    <img
                      className={styles.wrapperRectangle40386Child}
                      alt=""
                      src="/rectangle-40386.svg"
                    />
                  </div>
                  <img
                    className={styles.playButtonBackground}
                    alt=""
                    src="/play-button-background.svg"
                  />
                </div>
                <div className={styles.trailerLabel}>
                  <img
                    className={styles.trailerLabelChild}
                    alt=""
                    src="/rectangle-40368.svg"
                  />
                  <b className={styles.officialTrailer}>Official Trailer</b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className={styles.offerElementsIcon}
          alt=""
          src="/offer-elements@2x.png"
        />
        <img
          className={styles.offerElementsIcon1}
          alt=""
          src="/offer-elements@2x.png"
        />
        <img
          className={styles.offerBottomIcon}
          loading="lazy"
          alt=""
          src="/vector-708.svg"
        />
        <img
          className={styles.offerElementIcon}
          alt=""
          src="/offer-element.svg"
        />
        <img
          className={styles.frameInner}
          loading="lazy"
          alt=""
          src="/rectangle-40363.svg"
        />
        <img
          className={styles.anotherElementIcon}
          alt=""
          src="/vector-750-1.svg"
        />
        <img
          className={styles.rectangleIcon}
          loading="lazy"
          alt=""
          src="/rectangle-40363-1.svg"
        />
        <img
          className={styles.lastElementIcon}
          loading="lazy"
          alt=""
          src="/vector-714.svg"
        />
        <img
          className={styles.frameIcon}
          loading="lazy"
          alt=""
          src="/frame-1000004668@2x.png"
        />
        <img
          className={styles.offerElementsIcon2}
          alt=""
          src="/offer-icons.svg"
        />
        <img
          className={styles.offerElementsIcon3}
          alt=""
          src="/offer-elements.svg"
        />
        <img
          className={styles.offerElementsIcon4}
          alt=""
          src="/offer-icons.svg"
        />
        <img
          className={styles.offerElementsIcon5}
          alt=""
          src="/offer-icons2.svg"
        />
        <img
          className={styles.offerElementsIcon6}
          alt=""
          src="/offer-elements1.svg"
        />
        <img
          className={styles.offerImageIcon}
          alt=""
          src="/offer-image@2x.png"
        />
        <img className={styles.image8Icon} alt="" src="/image-8@2x.png" />
        <div className={styles.wrapperGroup1261154839}>
          <img
            className={styles.wrapperGroup1261154839Child}
            loading="lazy"
            alt=""
            src="/group-1261154839@2x.png"
          />
        </div>
        <img
          className={styles.groupIcon}
          loading="lazy"
          alt=""
          src="/group-1261154840@2x.png"
        />
        <div className={styles.featureTitleWrapper}>
          <div className={styles.featureTitle}>
            <div className={styles.features}>FEATURES</div>
            <div className={styles.features1}>FEATURES</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent4;
