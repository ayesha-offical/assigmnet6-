"use strict";
import Image from "next/image";

const Homepag = () => {
  return (
    <>
     
      <main className="flex flex-col sm:flex-row gap-2">
        <div className=" w-full sm:w-1/2 flex my-10  sm:my-0  flex-col justify-center gap-5">
          <div className=" w-[90%] pt-10 sm:pt-0 pl-9 flex flex-col gap-5 sm:w-[70%] md:w-[85%] ">
            <div className="flex items-center flex-col gap-4">
              <h1 className=" text-5xl  xl:text-6xl font-bold lg:text-5xl md:text-4xl sm:text-3xl ">
                Learn new skills online with ease
              </h1>
              <p className="">
                Discover a wide range of courses covering a variety of subjects,
                taught by expert instructors
              </p>
            </div>
          </div>
          <div className=" pl-9 flex  gap-2">
            <button className=" bg-black text-xs md:text-base py-3 px-4  rounded-md text-white ">
              Start Learning Now
            </button>
            <button className=" bg-white text-xs md:text-base py-3 px-4  rounded-md border  border-black">
              Explore Courses
            </button>
          </div>
        </div>

        <div className=" w-full sm:w-1/2">
          <div className=" hidden sm:block">
            <Image src={"/Image.svg"} alt={"image"} width={720} height={900} />
          </div>
          <div className="block sm:hidden ">
            <Image
              src={"/smallimage.svg"}
              alt={"image"}
              width={650}
              height={390}
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Homepag;
