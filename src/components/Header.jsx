import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="w-full bg-white py-4 shadow-sm">
      <div className="container mx-auto px-6 flex items-center justify-between">
       
        <Link href="/" className="flex items-center">
    
            <Image
              src="/logo.png"
              alt="Supreme Group Logo"
              width={160}
              height={40}
              priority
            />
        
        </Link>

       
        <div className="flex items-center space-x-6">
     
          <Link href="#contact" className="px-6 py-2 rounded-full bg-[#4DE4FD] text-black font-medium transition hover:bg-[#3ec8d9]">
              Contact Us
          </Link>

        
          <Link href="#">
              <Image
                src="/bxl-linkedin.svg.png"
                alt="LinkedIn"
                width={24}
                height={24}
              />
          </Link>


          <button className="flex items-center space-x-1">
            <Image
              src="/lang.png"
              alt="Language selector"
              width={20}
              height={20}
            />
            <span className="text-sm font-medium">ENG</span>
          </button>
        </div>
      </div>
    </header>
  )
}
