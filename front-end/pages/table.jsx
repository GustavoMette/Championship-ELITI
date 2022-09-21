import Link from 'next/link'

export default function Home() {
  return (
    <div>
    <h1> hello</h1>
    <Link href='/'>
      <a>Voltar</a>
      </Link>
    </div>
  )
}