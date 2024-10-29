import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center overflow-hidden gap-4'>
      <img src="/hero-bg-1.jpg" alt="not-found image" className="absolute blur h-full w-full -z-10 object-cover" />
      <h1 className='xl:text-[54px] md:text-[40px] text-[32px] text-center px-3'>Diese Seite konnte nicht gefunden werden</h1>
      <Link className='cursor-pointer whitespace-nowrap px-5 pb-1 pt-0.5 xl:!text-[32px] md:!text-[28px] !text-[24px] border-2 font-bold border-black rounded uppercase bg-yellow-200/[0.6] hover:after:!w-0 hover:!text-black hover:bg-yellow-200/[1]' href="/">zur Startseite</Link>
    </div>
  )
}