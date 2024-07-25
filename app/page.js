// pages/index.js
import Image from "next/image";
import styles from "./page.module.css";
import FileReaderComponent from '../components/FileReader';

const pageWrap = {
  padding: '20px',
  margin: '100px'
};

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Serhii</h1>
      <div style={pageWrap}>
        <FileReaderComponent />
      </div>
      
    </main>
  );
}
