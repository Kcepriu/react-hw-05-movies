// rfce
// import styles from './page.module.css'
import Home from "@/components/screen/Home/Home";

export default function App() {
  // @ts-expect-error Async Server Component
  return <Home />;
}
