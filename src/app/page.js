import styles from './page.module.css';
import 'tailwindcss/tailwind.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div className='text-red-800'>index</div>
      </div>
    </main>
  );
}
