import { ReactElement } from "react";
import Image from "next/image";
import { NextPageWithLayout } from "@/pages/_app";
import Layout from "@/components/layout";
import StatusBar from "@/components/statusbar";
import Details from "@/components/details";
import PrimaryLink from "@/components/primarylink";
import styles from "@/app/page.module.css";
import CodeBlock from "@/components/codeBlock";

const ReapersWaltz: NextPageWithLayout = () => {
  return (
    <div className={styles.ctaList}>
      <h1>Reapers Waltz</h1>
      
      <StatusBar 
        status={true} 
        code="https://github.com/Wake1st/reapers-waltz-godot" 
        play="https://ashassault.itch.io/isekai-horror-game-jam" 
      />

      <Details 
        time="3 weeks" 
        genre="2D Horror Puzzle" 
        links={{
          "Godot": "https://godotengine.org/",
        }}
      />

      <div className={styles.ctaText}>
        <div className={styles.content}>
          <h2 className={styles.infoHeading}>
            The Why
          </h2>
          <hr />

          <p className={styles.content}>
            While I was streaming one day, someone hopped into the chat and started talking about a game jam they were working on for the <PrimaryLink href="https://itch.io/jam/isekai-horror-jam">Isekai Horror Jam</PrimaryLink>. Long story short: I didn&apos;t finish in time (I joined their team with 4 days left to the deadline), but after the jam I rebuilt the game using <PrimaryLink href="https://godotengine.org/">Godot</PrimaryLink>. While there are many moving parts to this game, I want to focus on the achievements system because its structually different than the rest of the game.
          </p>
        </div>

        <Image className={styles.ctaImage} src="/horror_jam.png" width={320} height={200} alt="Isekai Horror Jam Title Card" />
      </div>

      <div className={styles.ctaText}>
        <div className={styles.content}>
          <h2 className={styles.infoHeading}>
            Achievements
          </h2>
          <hr />

          <p className={styles.content}>
            This is game, the player explores the cursed dungeon of an cruel god; to escape they must activate certain events - these also counted as achievements. In order to avoid a tangled web of instance passing around the game&apos;s node tree, I decided to use a static class.
          </p>

          <CodeBlock content={achievementClass} />

          <p className={styles.content}>
            The value of <var>added</var> and the functions <var>add(...)</var> and <var>all_achieved()</var> are all called on in different parts of the game, and since the references are static, the whole game will have one source of truth for the achievements. The level exit, the in game HUD, and the achievements menu all rely on this class; since these systems are in very different places (code wise), it is simpler to setup achievements this way.
          </p>
        </div>
      </div>
    </div>
  );
}
 
ReapersWaltz.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
 
export default ReapersWaltz;


const achievementClass = `
class_name Achievements


enum Type {
	NONE,
	AMULET,
	CRUSHING,
	DROWNING,
	ENEMY,
	MUSIC_BOX,
	SPIKES,
	SWORD,
	THE_PIT,
}

static var achievements: Dictionary = {
	Type.AMULET: false,
	Type.CRUSHING: false,
	Type.DROWNING: false,
	Type.ENEMY: false,
	Type.MUSIC_BOX: false,
	Type.SPIKES: false,
	Type.SWORD: false,
	Type.THE_PIT: false,
}

static var added: Type


static func add(type: Type) -> void:
	achievements[type] = true;
	added = type


static func all_achieved() -> bool:
	for value in achievements.values():
		if !value:
			return false
	return true
`;