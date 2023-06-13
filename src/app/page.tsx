import NewsList from "@/components/NewsList";
import styles from "./page.module.css";
import { getData } from "@/api/newsApi";

export default async function Home() {
  const newsList = await getData(
    "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=74e8e4a2c3484e6abc528952be1809b0"
  );

  return (
    <main className={styles.main}>
      <NewsList data={newsList} />
    </main>
  );
}
