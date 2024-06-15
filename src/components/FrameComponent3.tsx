import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent3.module.css";

export type FrameComponent3Type = {
  className?: string;
  rectangle40367?: string;
  playFor2Hours?: string;

  /** Style props */
  propFlexWrap?: CSSProperties["flexWrap"];
  propMinWidth?: CSSProperties["minWidth"];
  propLeft?: CSSProperties["left"];
  propPadding?: CSSProperties["padding"];
  propLeft1?: CSSProperties["left"];
  propRight?: CSSProperties["right"];
  propMarginLeft?: CSSProperties["marginLeft"];
  propMinWidth1?: CSSProperties["minWidth"];
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
  rectangle40367,
  playFor2Hours,
  propFlexWrap,
  propMinWidth,
  propLeft,
  propPadding,
  propLeft1,
  propRight,
  propMarginLeft,
  propMinWidth1,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      flexWrap: propFlexWrap,
    };
  }, [propFlexWrap]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
      padding: propPadding,
    };
  }, [propLeft, propPadding]);

  const rectangleIconStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft1,
      right: propRight,
    };
  }, [propLeft1, propRight]);

  const playFor2Style: CSSProperties = useMemo(() => {
    return {
      marginLeft: propMarginLeft,
    };
  }, [propMarginLeft]);

  const frameDiv3Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div
      className={[styles.frameParent, className].join(" ")}
      style={frameDivStyle}
    >
      <div className={styles.frameGroup} style={frameDiv1Style}>
        <div className={styles.vectorParent} style={frameDiv2Style}>
          <img
            className={styles.frameChild}
            alt=""
            src={rectangle40367}
            style={rectangleIconStyle}
          />
          <div className={styles.rewardProgressWrapper}>
            <div className={styles.rewardProgress}>
              <img
                className={styles.rewardProgressBar}
                alt=""
                src="/vector-763.svg"
              />
              <div className={styles.rewardProgressDetailsWrapper}>
                <div className={styles.rewardProgressDetails}>
                  <div className={styles.rewardName}>{`Reward name `}</div>
                  <div className={styles.x3}>x3</div>
                </div>
              </div>
            </div>
          </div>
          <h1 className={styles.playFor2} style={playFor2Style}>
            {playFor2Hours}
          </h1>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.vectorGroup}>
            <img
              className={styles.frameItem}
              loading="lazy"
              alt=""
              src="/rectangle-40381-1.svg"
            />
            <h1 className={styles.claim}>Claim</h1>
          </div>
        </div>
      </div>
      <div className={styles.vectorContainer} style={frameDiv3Style}>
        <img
          className={styles.frameInner}
          alt=""
          src="/rectangle-40381-1.svg"
        />
        <h1 className={styles.claim1}>Claim</h1>
      </div>
    </div>
  );
};

export default FrameComponent3;
