import Image from "next/image"

const Afterhome = () => {
  return (
    <main>
        <div className=" bg-[#F7F7F7] gap-2 md:gap-0 md:h-[228px] flex  items-center justify-between px-4 md:flex-row flex-col">
          <div className="md:text-[23px] text-[20px] mt-5 font-bold w-[320px] h-[68px]  ">
            Trusted by 2000+ companies worldwide.
            </div>
            <div>
                <Image
                src={'/Logos.svg'}
                alt="logo"
                height={56}
                width={880}
                />
               
            </div>
           
    </div>
       
    </main>
  )
}

export default Afterhome