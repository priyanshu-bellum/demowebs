import { FunctionComponent } from "react";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameGroup}>
        <div className={styles.frameContainer}>
          <div className={styles.frameDiv}>
            <div className={styles.frameWrapper}>
              <div className={styles.rewardNameParent}>
                <div className={styles.rewardName}>{`Reward name `}</div>
                <div className={styles.x3}>x3</div>
              </div>
            </div>
            <div className={styles.vectorParent}>
              <img
                className={styles.frameChild}
                alt=""
                src="/rectangle-40367.svg"
              />
              <img className={styles.frameItem} alt="" src="/vector-763.svg" />
            </div>
            <h1 className={styles.referAFriend}>Refer a Friend</h1>
          </div>
          <div className={styles.frameParent1}>
            <div className={styles.frameWrapper1}>
              <div className={styles.vectorGroup}>
                <img
                  className={styles.frameInner}
                  loading="lazy"
                  alt=""
                  src="/rectangle-40381-1.svg"
                />
                <h1 className={styles.claim}>Claim</h1>
              </div>
            </div>
            <div className={styles.vectorContainer}>
              <img
                className={styles.rectangleIcon}
                loading="lazy"
                alt=""
                src="/rectangle-40381-1.svg"
              />
              <h1 className={styles.claim1}>Claim</h1>
            </div>
          </div>
        </div>
        <div className={styles.frameParent2}>
          <div className={styles.frameParent3}>
            <div className={styles.frameParent4}>
              <div className={styles.rewardNameGroup}>
                <div className={styles.rewardName1}>{`Reward name `}</div>
                <div className={styles.x31}>x3</div>
              </div>
              <div className={styles.vectorParent1}>
                <img
                  className={styles.frameChild1}
                  alt=""
                  src="/rectangle-40367-7.svg"
                />
                <img
                  className={styles.vectorIcon}
                  alt=""
                  src="/vector-763.svg"
                />
              </div>
              <h1 className={styles.firstKill}>First Kill</h1>
            </div>
            <div className={styles.vectorParent2}>
              <img
                className={styles.frameChild2}
                alt=""
                src="/rectangle-40367-2.svg"
              />
              <div className={styles.frameWrapper2}>
                <div className={styles.vectorParent3}>
                  <img
                    className={styles.frameChild3}
                    alt=""
                    src="/vector-763.svg"
                  />
                  <div className={styles.frameWrapper3}>
                    <div className={styles.rewardNameContainer}>
                      <div className={styles.rewardName2}>{`Reward name `}</div>
                      <div className={styles.x32}>x3</div>
                    </div>
                  </div>
                </div>
              </div>
              <h1 className={styles.playFor2}>Play for 2 hours</h1>
            </div>
          </div>
          <div className={styles.vectorParent4}>
            <img
              className={styles.frameChild4}
              loading="lazy"
              alt=""
              src="/rectangle-40381-1.svg"
            />
            <h1 className={styles.claim2}>Claim</h1>
          </div>
        </div>
        <div className={styles.frameWrapper4}>
          <div className={styles.vectorParent5}>
            <img
              className={styles.frameChild5}
              alt=""
              src="/rectangle-40381-1.svg"
            />
            <h1 className={styles.claim3}>Claim</h1>
          </div>
        </div>
      </div>
      <div className={styles.frameParent5}>
        <div className={styles.frameWrapper5}>
          <div className={styles.frameParent6}>
            <div className={styles.frameWrapper6}>
              <div className={styles.rewardNameParent1}>
                <div className={styles.rewardName3}>{`Reward name `}</div>
                <div className={styles.x33}>x3</div>
              </div>
            </div>
            <div className={styles.vectorParent6}>
              <img
                className={styles.frameChild6}
                alt=""
                src="/rectangle-40367-3.svg"
              />
              <img
                className={styles.frameChild7}
                alt=""
                src="/vector-763.svg"
              />
            </div>
            <h1 className={styles.winAMatch}>Win a match</h1>
          </div>
        </div>
        <div className={styles.winMatchClaimButton}>
          <img
            className={styles.winMatchClaimButtonChild}
            alt=""
            src="/rectangle-40381-1.svg"
          />
          <h1 className={styles.claim4}>Claim</h1>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
