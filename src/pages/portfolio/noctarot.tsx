import { ReactElement } from "react";
import { NextPageWithLayout } from "@/pages/_app";
import Layout from "@/components/layout";
import StatusBar from "@/components/statusbar";
import Details from "@/components/details";
import PrimaryLink from "@/components/primarylink";
import styles from "@/app/page.module.css";
import CodeBlock from "@/components/codeBlock";

const NocTarot: NextPageWithLayout = () => {
  return (
    <div className={styles.ctaList}>
      <h1>NocTarot</h1>

      <StatusBar 
        status={false} 
        code="https://github.com/Wake1st/noctarot" 
        play="https://wake1st.itch.io/noctarot" 
      />

      <Details 
        time="2 weeks (so far)" 
        genre="2D Narative Puzzle" 
        links={{
          "Godot": "https://godotengine.org/",
          "Dialogic 2": "https://docs.dialogic.pro/introduction.html"
        }}
      />

      <div className={styles.ctaText}>
        <div className={styles.content}>
          <h2 className={styles.infoHeading}>
            The Why
          </h2>
          <hr />

          <p>
            Here&apos;s a nutty idea: try making one game for 3 game jams. Is it feasable? No, but to me the most important aspect of a game jam is the inspiration (the results often varry). So, what do you get when you make a game about moths, tarot, and coffee: NocTarot. While there wasn&apos;t enough time to submit to all 3 jams, the team I worked with was able to submit to one, the <PrimaryLink href="https://itch.io/jam/the-tarot-jam">Tarot Jam</ PrimaryLink>.
          </p>
        </div>
      </div>

      <div className={styles.ctaText}>
        <div className={styles.content}>
          <h2 className={styles.infoHeading}>
            Out of the Dialog
          </h2>
          <hr />

          <p>
            Due to the heavy narative aspects of this game, I decided to use an existing plugin: <PrimaryLink href="https://docs.dialogic.pro/">Dialogic 2</ PrimaryLink>. While this is an excellent dialog system, it seems to be built for visual novel games. Since NocTarot&apos;s main mechanics are not dialog based, some bootstrapping needs to be applied to integrate Dialogic into our game.
          </p>

          <p>
            The narative is our foundation, therefore every time we want the player to interact with the other game elements, we must first send out a signal to ensure the rest of our game knows what&apos;s going on. Dialogic has the ability to send signals with a string argument, and can be written into a Dialogic <var>Timeline</var> via text.
          </p>

          <CodeBlock content={signalExample} />

          <p>
            When dialogic recieves a dialog signal, it emits it&apos;s own godot signal called <var>signal_event</var>, which we handle with a custom function where we match each signal type and call a custom signal from the <var>DialogUI</var> class.
          </p>

          <CodeBlock content={dialogMatch} />

          <p>
             I know that I may have confused more than clarified, but remember that the main goal is to move from the Dialogic system to the rest of our game - all this is boilerplate to accomplish this.
          </p>
        </div>
      </div>

      <div className={styles.ctaText}>
        <div className={styles.content}>
          <h2 className={styles.infoHeading}>
            Back into the Dialog
          </h2>
          <hr />

          <p>
            Eventually, we want to return the player to the dialog system; for this, we use a custom variable called <var>next_chapter</var> and a system of <var>DialogueChecks</var>. The <var>next_chapter</var> tells Dialogic which <var>Timeline</var> to run next, but how do we know <i>when</i> to run said <var>Timeline</var>? That&apos;s where the <var>DialogueChecks</var> class enters the scene. (Is <q>Dialogue</q> the correct spelling? Excellent question! I won&apos;t be taking any more questions.)
          </p>

          <p>
            Before we go further, let&apos;s look at how we setup our Dialogic... logic: we set the next chapter, let our game know what the check for, then tell Dialogic that the current timeline has ended.
          </p>

          <CodeBlock content={endTimeline} />

          <p>
            The <var>next_chapter</var> is just a variable we can set here and read from outside Dialogic; the <var>check_training_deck</var> signal is more complicated. Ultimately, we need to process this signal as a <q>check</q> type, <q>training</q> sub-type, with <q>deck</q> as the value we&apos;re checking for. Below you can see the <var>DialogueChecks</var> class and it&apos;s inner workings.
          </p>
          
          <CodeBlock content={dialogChecks} />

          <p>
            Since there are many different places throughout our game code where a value might be checked, we use static functions and properties. When a check does pass, we call <var>set_valid(...)</var> on that check type. Back in our main scene, we run the <var>current_passed()</var> function on every frame; if true, we tell Dialogic to start the <var>next_chapter</var>.
          </p>

          <CodeBlock content={nextChapter} />
        </div>
      </div>

      <div className={styles.ctaText}>
        <div className={styles.content}>
          <h2 className={styles.infoHeading}>
            Status Report
          </h2>
          <hr />

          <p>
            While our team did submit a working <PrimaryLink href="https://wake1st.itch.io/noctarot">prototype</PrimaryLink> in time for the <PrimaryLink href="https://itch.io/jam/the-tarot-jam">Tarot Jam</ PrimaryLink>, there&apos;s still plenty of bugs to be fixed and content to be added until this game feels more <q>finished</q>. A few people have agreed to continue working on it bit by bit. I for one want to improve the boilerplate - maybe it&apos;s as good as it can be, but I don&apos;t want to settle if a better approach could be built.
          </p>
        </div>
      </div>
    </div>
  );
}

NocTarot.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
 
export default NocTarot;

const signalExample = `
[signal arg="transition_kitchen"]
`;

const dialogMatch = `
func _ready() -> void:
	Dialogic.signal_event.connect(_handle_text_signal)
	Dialogic.timeline_ended.connect(_handle_timeline_ended)


func _handle_text_signal(argument: String) -> void:
	var args = argument.split("_")
	var command = args[0]
	args.remove_at(0)
	
	match command:
		"transition":
			Dialogic.paused = true
			transition.emit(args)
		"activate":
			activate.emit(args)
		"deactivate":
			deactivate.emit(args)
		"enter":
			enter.emit()
		"exit":
			exit.emit()
		"check":
			check.emit(args)
		"client":
			client.emit(args)
		"training":
			training_ended.emit()
`;

const endTimeline = `
set {next_chapter} = "card_training_hover"
[signal arg="check_training_deck"]
[end_timeline]
`;

const nextChapter = `
func _process(_delta) -> void:
	if DialogueChecks.current_passed():
		dialogue_ui.start(Dialogic.VAR.next_chapter)
`;

const dialogChecks = `
class_name DialogueChecks


enum Types {
	NONE,
	DECK,
	HOVERED,
	SELECTED,
	FINALIZED,
	FORTUNE,
	DRINK,
}

static var Possible: Dictionary[Types, bool] ={
	Types.NONE: false,
	Types.DECK: false,
	Types.HOVERED: false,
	Types.SELECTED: false,
	Types.FINALIZED: false,
	Types.FORTUNE: false,
	Types.DRINK: false,
}

static var currentCheck: Types


static func set_valid(type: Types) -> void:
	Possible[type] = true


static func current_passed() -> bool:
	if Possible[currentCheck]:
		Possible[currentCheck] = false
		return true
	else:
		return false

`;
