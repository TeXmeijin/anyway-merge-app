import { ReactNode } from "react"
import styles from "./styles.module.css";

type Props = {
  children: ReactNode
}

const ContributerHeading = (props: Props) => {
  const { children } = props

  return <h1 className={styles.container}>{children}</h1>
}

export default ContributerHeading