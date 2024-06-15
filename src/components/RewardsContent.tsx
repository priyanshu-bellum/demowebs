import { FunctionComponent } from "react";
import FrameComponent3 from "./FrameComponent3";
import FrameComponent2 from "./FrameComponent2";
import styles from "./RewardsContent.module.css";

export type RewardsContentType = {
  className?: string;
};

const RewardsContent: FunctionComponent<RewardsContentType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.rewardsContent, className].join(" ")}>
      <div className={styles.rewardList}>
        <div className={styles.rewardItem}>
          <div className={styles.rewardContainer}>
            <div className={styles.rewardDetails}>
              <div className={styles.rewardName}>{`Reward name `}</div>
              <div className={styles.x3}>x3</div>
            </div>
          </div>
          <div className={styles.rewardButton}>
            <img
              className={styles.rewardButtonChild}
              alt=""
              src="/rectangle-40367.svg"
            />
            <img
              className={styles.rewardButtonItem}
              alt=""
              src="/vector-763.svg"
            />
          </div>
          <h1 className={styles.referAFriend}>Refer a Friend</h1>
        </div>
        <div className={styles.claimButtonContainer}>
          <img
            className={styles.claimButtonContainerChild}
            loading="lazy"
            alt=""
            src="/rectangle-40381-1.svg"
          />
          <h1 className={styles.claim}>Claim</h1>
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.rewardNameParent}>
            <div className={styles.rewardName1}>{`Reward name `}</div>
            <div className={styles.x31}>x3</div>
          </div>
          <div className={styles.vectorParent}>
            <img
              className={styles.frameChild}
              alt=""
              src="/rectangle-40367-1.svg"
            />
            <img className={styles.frameItem} alt="" src="/vector-763-1.svg" />
          </div>
          <h1 className={styles.firstKill}>First Kill</h1>
        </div>
        <FrameComponent3
          rectangle40367="/rectangle-40367-2.svg"
          playFor2Hours="Play for 2 hours"
        />
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.frameDiv}>
          <div className={styles.frameParent1}>
            <div className={styles.frameWrapper}>
              <div className={styles.rewardNameGroup}>
                <div className={styles.rewardName2}>{`Reward name `}</div>
                <div className={styles.x32}>x3</div>
              </div>
            </div>
            <div className={styles.vectorGroup}>
              <img
                className={styles.frameInner}
                alt=""
                src="/rectangle-40367-3.svg"
              />
              <img className={styles.vectorIcon} alt="" src="/vector-763.svg" />
            </div>
            <h1 className={styles.winAMatch}>Win a match</h1>
          </div>
          <FrameComponent3
            rectangle40367="/rectangle-40367-4.svg"
            playFor2Hours="Headshot Kills"
            propFlexWrap="unset"
            propMinWidth="unset"
            propLeft="133px"
            propPadding="var(--padding-lg) var(--padding-4xs) var(--padding-5xs) var(--padding-lg)"
            propLeft1="unset"
            propRight="-0.3px"
            propMarginLeft="-70px"
            propMinWidth1="unset"
          />
        </div>
        <div className={styles.frameWrapper1}>
          <FrameComponent2 rectangle40367="/rectangle-40367-4.svg" />
        </div>
      </div>
    </div>
  );
};

export default RewardsContent;
