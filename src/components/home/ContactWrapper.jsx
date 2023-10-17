import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function ContactWrapper() {
  return (
    <div className="w-full flex flex-col lg:flex-row lg:justify-between gap-10 items-center text-violet-700">
      <div className="w-full lg:[30%] flex pl-10 lg:pl-0 justify-start items-center gap-6">
        <FontAwesomeIcon icon={faPhone} className='text-gray-300 text-2xl' />
        <div className="">
          <h1 className="font-bold">Phone number</h1>
          <p className="">310-437-2766</p>
        </div>

      </div>
      <div className="w-full lg:[30%] flex pl-10 lg:pl-0 justify-start items-center gap-6">
        <FontAwesomeIcon icon={faEnvelope} className='text-gray-300 text-2xl' />
        <div className="">
          <h1 className="font-bold">Email</h1>
          <p className="">inganta123@gmail.com</p>
        </div>
      </div>
      <div className="w-full lg:[30%] flex pl-10 lg:pl-0 justify-start items-center gap-6">
        <FontAwesomeIcon icon={faLocationDot} className='text-gray-300 text-2xl' />
        <div className="">
          <h1 className="font-bold">Address</h1>
          <p className="">706 Campfire Ave. Meriden, CT064</p>
        </div>
      </div>

    </div>
  )
}

export default ContactWrapper