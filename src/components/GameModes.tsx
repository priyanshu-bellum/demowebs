import { FunctionComponent } from "react";
import styles from "./GameModes.module.css";

export type GameModesType = {
  className?: string;
};

const GameModes: FunctionComponent<GameModesType> = ({ className = "" }) => {
  return (
    <section className={[styles.gameModes, className].join(" ")}>
      <div className={styles.gameModeDescription}>
        <div className={styles.survivalChallenge}>
          <div className={styles.modeDescriptions}>
            <p className={styles.engageInA}>
              Engage in a battle for survival on an island with 100 players. Be
              the last survivor or squad standing to claim victory.
            </p>
          </div>
          <div className={styles.dystopianFuture}>
            <p className={styles.enterADystopian}>
              Enter a dystopian future where factions fight for control. Join
              skilled heroes in epic team-based combat.
            </p>
            <div className={styles.factionImage}>
              <div className={styles.factions}>
                <div className={styles.factionIcons} />
                <div className={styles.factionIcons1} />
                <div className={styles.factionIcons2} />
              </div>
            </div>
          </div>
          <div className={styles.modeDescriptions1}>
            <p className={styles.takeOnSolo}>
              Take on solo challenges in our Free for All mode. Eliminate
              enemies and emerge victorious in intense battles.
            </p>
          </div>
        </div>
        <div className={styles.heroesWrapper}>
          <div className={styles.heroes}>
            <div className={styles.heroes1}>heroes</div>
            <div className={styles.heroImage}>
              <div className={styles.heroIllustration} />
              <img
                className={styles.heroDetailsIcon}
                alt=""
                src="/hero-details@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameModes;
