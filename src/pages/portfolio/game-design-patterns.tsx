import { ReactElement } from "react";
import Image from "next/image";
import { NextPageWithLayout } from "@/pages/_app";
import Layout from "@/components/layout";
import StatusBar from "@/components/statusbar";
import styles from "@/app/page.module.css";
import Details from "@/components/details";
import PrimaryLink from "@/components/primarylink";
import CodeBlock from "@/components/codeBlock";

const GameDesignPatterns: NextPageWithLayout = () => {
  
  return (
    <div className={styles.ctaList}>
      <h1>Game Design Patterns</h1>

      <StatusBar 
        status={false}
        code="https://github.com/Wake1st/GameDesignPatterns"
        play={null}
      />

      <Details 
        time="2 weeks (thus far)" 
        genre="Design Pattern Showcase" 
        links={{
          "Raylib": "https://www.raylib.com/",
          "Game Design Pattens": "https://gameprogrammingpatterns.com/"
        }}
      />

      <div className={styles.ctaText}>
        <Image className={styles.ctaImage} src="/Bob_Nystrom_and_dog.png" width={420} height={300} alt="Bob Nystrom and Dog" />

        <div className={styles.content}>
          <h2 className={styles.infoHeading}>
            The Why
          </h2>
          <hr />

          <p>
            After years of telling myself <q>I</q>ll learn C++... someday&rdquo;, I finally decided to buckle down and give it a try, and I&apos;m glad I did! While it was no cakewalk, I was able to put together a few small examples of some basic game design patterns (hence the project name). My reference was the excellent book <PrimaryLink href="https://gameprogrammingpatterns.com/contents.html">Game Programming Patterns</PrimaryLink> by Bob Nystrom (see photo (not the dog)); it&apos;s a great read, and very accessible (which is saying something for a book about design patterns).
          </p>
        </div>
      </div>

      <div className={styles.ctaText}>
        <div className={styles.content}>
          <h2 className={styles.infoHeading}>
            Command Pattern
          </h2>
          <hr />

          <p className={styles.content}>
            The first pattern I implemented was a simple <PrimaryLink href="https://gameprogrammingpatterns.com/command.html">command pattern</PrimaryLink>. Inputs are turned into commands, commands are run and then stored in an array; Ctrl+Z and Ctrl+Y will undo and redo the array of commands, respectively, thus allowing a user to move back and forth. While many games could probably benefit from an undo/redo feature, for tools and editors it&apos;s usually an absolute must.
          </p>

          <div className={styles.fullImage}>
            <Image className={styles.ctaImage} src="/command_pattern.gif" width={720} height={400} alt="Command Pattern Example" />
          </div>
        </div>
      </div>
      
      <div className={styles.ctaText}>
        <div className={styles.content}>
          <h2 className={styles.infoHeading}>
            Input Queue
          </h2>
          <hr />

          <p className={styles.content}>
            I tried to implement a <q>version</q> of the <PrimaryLink href="https://gameprogrammingpatterns.com/event-queue.html">event queue pattern</PrimaryLink>, but it&apos;s more of an input queue (still important, especially in fighting and platforming games). Let&apos;s say you&apos;re building a combo system: you can chain multiple attacks together indefinitely. Since the inputs are constantly being <q>read</q> - clearing up space for new inputs to be written!
          </p>

          <div className={styles.fullImage}>
            <Image className={styles.ctaImage} src="/input_queue_pattern.gif" width={720} height={400} alt="Input Queue Pattern Example" />
          </div>

          <p className={styles.content}>
            User inputs are converted into commands and added to the queue - provided the queue isn&apos;t currently full. Notice how the modulus operator is applied after incrementing the <var>tail</var> - this ensures that the next command is stored at position <var>0</var>, thus allowing the same space in memory to be used to process a neverending chain of commands.
          </p>

          <CodeBlock content={addSnippet} />
          
          <p className={styles.content}>
            During the update call, a timer is ticked down until it reaches zero; when it does reach zero, if there are any commands in the queue, the command at the <var>head</var> of the queue is returned. Like the <var>tail</var>, the <var>head</var> is also wrapped back around to position <var>0</var>, <q>chasing</q> the tail until the queue is empty.
          </p>

          <CodeBlock content={updateSnippet} />
        </div>
      </div>

      <div className={styles.ctaText}>
        <div className={styles.content}>
          <h2 className={styles.infoHeading}>
            Status Report
          </h2>
          <hr />

          <p className={styles.content}>
            Currently, I need to get a working version for web (for a few small demos, I think web is best - and it&apos;s safer than downloading). Once I do, I hope to keep adding to it over time - I really want to try a bytecode demo!
          </p>
        </div>
      </div>
    </div>
  );
}
 
GameDesignPatterns.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default GameDesignPatterns;

const addSnippet = `
bool InputQueue::addInput(Command *command)
{
  // do not add if pending is full
  if ((tail + 1) % COMMAND_COUNT == head)
    return false;
  
  // add to the end of the list
  pending[tail] = command;
  tail = (tail + 1) % COMMAND_COUNT;
  return true;
}
`;

const updateSnippet = `
Command *InputQueue::update()
{
  // first, check timer for movement
  timer -= GetFrameTime();
  if (timer > 0.f)
  {
    return NULL;
  }
  else if (head == tail)
  {
    timer = 0.f;
    return NULL;
  }
  else
  {
    timer = COOLDOWN;
  }
  
  // return command
  Command *command = pending[head];
  head = (head + 1) % COMMAND_COUNT;
  return command;
}
`;