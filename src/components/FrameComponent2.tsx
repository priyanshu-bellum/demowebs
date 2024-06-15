import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent2.module.css";

export type FrameComponent2Type = {
  className?: string;
  rectangle40367?: string;

  /** Style props */
  propPosition?: CSSProperties["position"];
  propMargin?: CSSProperties["margin"];
  propBottom?: CSSProperties["bottom"];
  propLeft?: CSSProperties["left"];
  propTransformOrigin?: CSSProperties["transformOrigin"];
  propHeight?: CSSProperties["height"];
  propDisplay?: CSSProperties["display"];
  propColor?: CSSProperties["color"];
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
  rectangle40367,
  propPosition,
  propMargin,
  propBottom,
  propLeft,
  propTransformOrigin,
  propHeight,
  propDisplay,
  propColor,
}) => {
  const frameDiv4Style: CSSProperties = useMemo(() => {
    return {
      position: propPosition,
      margin: propMargin,
      bottom: propBottom,
      left: propLeft,
      transformOrigin: propTransformOrigin,
    };
  }, [propPosition, propMargin, propBottom, propLeft, propTransformOrigin]);

  const rewardNameStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
      display: propDisplay,
    };
  }, [propHeight, propDisplay]);

  const win10MatchesStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div
      className={[styles.vectorParent, className].join(" ")}
      style={frameDiv4Style}
    >
      <img className={styles.frameChild} alt="" src={rectangle40367} />
      <div className={styles.winMatchRewardInfo}>
        <div className={styles.vectorGroup}>
          <img className={styles.frameItem} alt="" src="/vector-763.svg" />
          <div className={styles.frameWrapper}>
            <div className={styles.rewardNameParent}>
              <div
                className={styles.rewardName}
                style={rewardNameStyle}
              >{`Reward name `}</div>
              <div className={styles.x3}>x3</div>
            </div>
          </div>
        </div>
      </div>
      <h1 className={styles.win10Matches} style={win10MatchesStyle}>
        Win 10 matches
      </h1>
    </div>
  );
};

export default FrameComponent2;
