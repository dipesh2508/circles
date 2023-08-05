import Image from 'next/image'
import Link from 'next/link'

const Topbar = () => {
  return (
    <nav className='topbar'>
      <Link href="/" className='flex item-center gap-4'>
        <Image src='/assets/logo.svg' alt='logo' width={28} height={28} />
        <p className="text-heading3-bold text-light-1 max-xs:hidden">Circles</p>
      </Link>
    </nav>
  )
}

export default Topbar