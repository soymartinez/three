import Link from 'next/link'

export default function Roll({ page }) {
  return (
    <Link href={page}>
      <a>
        <div className='absolute m-4 px-4 py-2 backdrop-blur-sm transition-all 
        animate-pulse duration-1000 bottom-0 right-0 hover:text-white rounded-lg'>
          {page === '/' ? 'cube' : page} &rarr;
        </div>
      </a>
    </Link>
  )
}
