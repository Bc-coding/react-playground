import styles from "./editorLayout.module.scss";

export default function EditorLayout({ children }) {
  return <main className={styles["editor-layout"]}>{children}</main>;
}
