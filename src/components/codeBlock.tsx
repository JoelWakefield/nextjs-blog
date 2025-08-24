import styles from "@/app/page.module.css";

export default function CodeBlock({ content } : { content: string }) {
  return (
    <div className={styles.codeBlock}>
      <pre>
        <code>{content}</code>
      </pre>
    </div>
  )
}