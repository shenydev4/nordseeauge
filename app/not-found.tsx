import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden gap-4">
      <div 
        className="absolute top-0 left-0 w-full h-full -z-10 bg-cover"
        style={{ 
          backgroundImage: "url('/hero-bg-1.jpg')"
        }} 
      >
        <div className="absolute top-0 left-0 w-full h-full backdrop-blur-md" /> {/* Blur layer */}
      </div>

      <h1 className="xl:text-[54px] md:text-[40px] text-[32px] text-center px-3">
        Diese Seite konnte nicht gefunden werden
      </h1>
      <Link
        className="cursor-pointer whitespace-nowrap px-5 pb-1 pt-0.5 xl:!text-[32px] md:!text-[28px] !text-[24px] border-2 font-bold border-black rounded uppercase bg-yellow-200/[0.6] hover:after:!w-0 hover:!text-black hover:bg-yellow-200/[1]"
        href="/"
      >
        zur Startseite
      </Link>
    </div>
  )
}