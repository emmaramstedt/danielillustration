import Carousel from '@/components/Carousel/Carousel';
import styles from './page.module.css';
import 'tailwindcss/tailwind.css';
const images = [
  {
    src: 'https://images.unsplash.com/photo-1573096108468-702f6014ef28?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Image 1',
    title: 'Title 2',
    description: 'This is image 1',
  },
  {
    src: 'https://images.unsplash.com/photo-1577398628395-4ebd1f36731b?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Image 2',
    title: 'Title 2',
    description: 'This is image 2',
  },
  {
    src: 'https://images.unsplash.com/photo-1573096108468-702f6014ef28?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Image 3',
    title: 'Title 3',
    description: 'This is image 3',
  },
];

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div className='text-red-800'>
          index
          <Carousel images={images} />
        </div>
      </div>
    </main>
  );
}
