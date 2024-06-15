import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.blogsContainerWrapper, className].join(" ")}>
      <div className={styles.blogsContainer}>
        <div className={styles.blogsTitleContainer}>
          <div className={styles.blogs}>blogs</div>
          <div className={styles.latestNewsContainer}>
            <h1 className={styles.latestNews}>lATEST nEWS</h1>
          </div>
        </div>
        <div className={styles.blogPostsContainer}>
          <div className={styles.frameParent}>
            <div className={styles.frameGroup}>
              <div className={styles.frameWrapper}>
                <div className={styles.loremIpsumDolorSitAmetParent}>
                  <p className={styles.loremIpsumDolor}>
                    Lorem ipsum dolor sit amet
                  </p>
                  <div className={styles.vectorParent}>
                    <img
                      className={styles.frameChild}
                      alt=""
                      src="/rectangle-40367-12.svg"
                    />
                    <img
                      className={styles.frameItem}
                      loading="lazy"
                      alt=""
                      src="/frame-1000004680@2x.png"
                    />
                    <img
                      className={styles.frameInner}
                      loading="lazy"
                      alt=""
                      src="/vector-730@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.vectorGroup}>
                <img
                  className={styles.rectangleIcon}
                  alt=""
                  src="/rectangle-40367-13@2x.png"
                />
                <div className={styles.frameContainer}>
                  <div className={styles.vectorContainer}>
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src="/vector-730-1.svg"
                    />
                    <div className={styles.april2024}>April 2024</div>
                  </div>
                  <div className={styles.vectorWrapper}>
                    <img
                      className={styles.frameChild1}
                      alt=""
                      src="/vector-739.svg"
                    />
                  </div>
                </div>
                <div className={styles.loremIpsumDolorSitAmetWrapper}>
                  <p className={styles.loremIpsumDolor1}>
                    Lorem ipsum dolor sit amet
                  </p>
                </div>
                <div className={styles.loremIpsumDolorSitAmetGroup}>
                  <p className={styles.loremIpsumDolor2}>
                    Lorem ipsum dolor sit amet
                  </p>
                  <div className={styles.frameDiv}>
                    <img
                      className={styles.frameChild2}
                      alt=""
                      src="/rectangle-40367-14.svg"
                    />
                    <img
                      className={styles.frameIcon}
                      loading="lazy"
                      alt=""
                      src="/frame-1000004680-1@2x.png"
                    />
                    <img
                      className={styles.frameChild3}
                      loading="lazy"
                      alt=""
                      src="/vector-730-2@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.vectorParent1}>
              <img
                className={styles.frameChild4}
                alt=""
                src="/rectangle-40368-1@2x.png"
              />
              <div className={styles.frameParent1}>
                <div className={styles.vectorParent2}>
                  <img
                    className={styles.frameChild5}
                    alt=""
                    src="/rectangle-40369-1.svg"
                  />
                  <div className={styles.wrapperRectangle40373}>
                    <img
                      className={styles.wrapperRectangle40373Child}
                      loading="lazy"
                      alt=""
                      src="/rectangle-40373.svg"
                    />
                  </div>
                </div>
                <p className={styles.loremIpsumDolor3}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
