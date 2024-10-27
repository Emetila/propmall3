import Link from '../Faq/';

export default function Home() {
  return (
    <div>
      <h1>Welcome to Propmall</h1>
      <Link href="/faq">
        <a>Go to FAQ</a>
      </Link>
    </div>
  );
}