import styles from "./centeredLayout.module.scss";

export default function CenteredLayout({ children }) {
  return <main className={styles["signup-layout"]}>{children}</main>;
}
