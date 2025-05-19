import Image from 'next/image'

const navColumns = [
  {
    title: 'APPLICATIONS',
    links: ['Apparel','Automotive','Filtration','Customised Solutions'],
  },
  {
    title: 'COMPANY',
    links: ['Innovation','Global Competency','About Us','Contact Us'],
  },
  {
    title: 'MORE',
    links: ['Careers','Privacy Policy','Terms and Conditions'],
  },
  {
    title: 'FOLLOW US',
    links: ['Twitter','LinkedIn','Instagram','Medium'],
  },
]

export default function Footer() {
  return (
    <footer className="bg-white text-sm text-gray-700 border-t border-gray-100">
      <div className="max-w-screen-xl mx-auto px-6 py-12">
     
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-12">
     
          <div className="flex flex-col items-center lg:items-start">
             <Image src="/logo.png" alt="Supreme Group" width={160} height={40} />
          </div>

    
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center lg:text-left">
            <div>
              <h3 className="font-semibold mb-3 text-black">APPLICATIONS</h3>
              <ul className="space-y-2">
                <li>Apparel</li>
                <li>Automotive</li>
                <li>Filtration</li>
                <li>Customised Solutions</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-black">COMPANY</h3>
              <ul className="space-y-2">
                <li>Innovation</li>
                <li>Global Competency</li>
                <li>About Us</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-black">MORE</h3>
              <ul className="space-y-2">
                <li>Careers</li>
                <li>Privacy Policy</li>
                <li>Terms and Conditions</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-black">FOLLOW US</h3>
              <ul className="space-y-2">
                <li>Twitter</li>
                <li>LinkedIn</li>
                <li>Instagram</li>
                <li>Medium</li>
              </ul>
            </div>
          </div>
        </div>

    
        <div className="mt-12 flex flex-col lg:flex-row justify-between items-center text-center lg:text-left text-gray-500">
          <p>©2023. All Rights Reserved.</p>
          <p>Supreme house: 110, 16th Road, Chembur, Mumbai – 400071.</p>
        </div>
      </div>
    </footer>
  );
}
