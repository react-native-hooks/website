import styles from "../../styles/footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        © {new Date().getFullYear()}, Built by Pritish Vaidya
      </a>
    </footer>
  )
}

export default Footer