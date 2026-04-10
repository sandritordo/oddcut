import Link from "next/link";

export default function Nav() {
  return (
    <header>
      <nav style={{ padding: "20px", display: "flex", gap: "20px" }}>
        <Link href="/">Home</Link>
        <Link href="/trabalho">Trabalho</Link>
        <Link href="/sobre-nos">Sobre Nós</Link>
        <Link href="/contacto">Contacto</Link>
      </nav>
    </header>
  );
}
