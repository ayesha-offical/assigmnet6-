import Image from "next/image";

const Category = () => {
  return (
    <>
      <main className="  h-[800px] xl:h-full lg:items-center flex flex-col">
        <div className="h-[300px] bg-white flex justify-center items-center ">
          <div className=" flex justify-center text-center">
            <div className="flex gap-[24px] flex-col  items-center text-center lg:text-start lg:item-start">
              <h2 className="md:text-5xl text-3xl font-bold">
                Explore Courses By Category
              </h2>
              <p>
                Discover a wide range of courses covering a variety of subjects,
                taught by expert instructors.
              </p>
            </div>
          </div>
        </div>
        <div className=" flex flex-col item-center justify-center">
          <div className=" flex md:h-[563px]  gap-9 item-center justify-center xl:flex-col ">
            <div className="h-[132px] flex flex-col xl:flex-row gap-[24px]">
              <div className="h-[132px]  w-[360px]  lg:w-[410px] flex gap-[32px] p-[16px] rounded-sm bg-[#F7F7F7]  items-center  text-center">
                <div className="w-[100px] h-[100px] rounded-sm flex gap-10  p-[34px] bg-white ">
                  <Image
                    src={"/pen-tool-2.svg"}
                    alt="logo"
                    height={32}
                    width={32}
                  />
                </div>
                <div className=" flex flex-col text-start  ">
                  <span className=" text-[18px] font-semibold ">
                    Design & Development
                  </span>
                  <span className="font-normal ">50+ Courses Available</span>
                </div>
              </div>
              <div className="h-[132px] w-[360px]  lg:w-[410px] flex gap-[32px] p-[16px] rounded-sm bg-[#F7F7F7] items-center  text-center">
                <div className="w-[100px] h-[100px] rounded-sm flex gap-10  p-[34px] bg-white">
                  <Image
                    src={"/volume-high.svg"}
                    alt="logo"
                    height={32}
                    width={32}
                  />
                </div>
                <div className=" flex flex-col text-start  ">
                  <span className=" text-[18px] font-semibold ">Marketing</span>
                  <span className="font-normal ">50+ Courses Available</span>
                </div>
              </div>
              <div className="h-[132px] w-[360px]  lg:w-[410px] flex gap-[32px] p-[16px] rounded-sm bg-[#F7F7F7] items-center  text-center">
                <div className="w-[100px] h-[100px] rounded-sm flex gap-10  p-[34px] bg-white">
                  <Image src={"/group.svg"} alt="logo" height={32} width={32} />
                </div>
                <div className=" flex flex-col text-start  ">
                  <span className=" text-[18px] font-semibold ">
                    Development
                  </span>
                  <span className="font-normal ">50+ Courses Available</span>
                </div>
              </div>
            </div>

            <div className="h-[132px] md:flex hidden flex-col xl:flex-row gap-[24px]">
              <div className="h-[132px]  w-[360px]  lg:w-[410px] flex gap-[32px] p-[16px] rounded-sm bg-[#F7F7F7] text-center items-center">
                <div className="w-[100px] h-[100px] rounded-sm flex gap-10  p-[34px] bg-white">
                  <Image
                    src={"/microphone.svg"}
                    alt="logo"
                    height={32}
                    width={32}
                  />
                </div>
                <div className=" flex flex-col text-start  ">
                  <span className=" text-[18px] font-semibold ">
                    Communication
                  </span>
                  <span className="font-normal ">50+ Courses Available</span>
                </div>
              </div>

              <div className="h-[132px] w-[360px]  lg:w-[410px] flex gap-[32px] p-[16px] rounded-sm bg-[#F7F7F7] items-center text-center">
                <div className="w-[100px] h-[100px] rounded-sm flex gap-10  p-[34px] bg-white">
                  <Image src={"/link.svg"} alt="logo" height={32} width={32} />
                </div>
                <div className=" flex flex-col text-start  ">
                  <span className=" text-[18px] font-semibold ">
                    Digital Marketing
                  </span>
                  <span className="font-normal ">50+ Courses Available</span>
                </div>
              </div>
              <div className="h-[132px] w-[360px] lg:w-[410px] flex gap-[32px] p-[16px] rounded-sm bg-[#F7F7F7] items-center text-center">
                <div className="w-[100px] h-[100px] rounded-sm flex gap-10  p-[34px] bg-white">
                  <Image
                    src={"/arrow-2.svg"}
                    alt="logo"
                    height={32}
                    width={32}
                  />
                </div>
                <div className=" flex flex-col text-start  ">
                  <span className=" text-[18px] font-semibold ">
                    Self Development
                  </span>
                  <span className="font-normal ">50+ Courses Available</span>
                </div>
              </div>
            </div>

            <div className="h-[132px] xl:flex hidden gap-[24px] ">
              <div className="h-[132px]  w-[410px] flex gap-[32px] p-[16px] rounded-sm bg-[#F7F7F7] items-center text-center">
                <div className="w-[100px] h-[100px] rounded-sm flex gap-10  p-[34px] bg-white">
                  <Image
                    src={"/briefcase.svg"}
                    alt="logo"
                    height={32}
                    width={32}
                  />
                </div>
                <div className=" flex flex-col text-start  ">
                  <span className=" text-[18px] font-semibold ">Business</span>
                  <span className="font-normal ">50+ Courses Available</span>
                </div>
              </div>
              <div className="h-[132px]  w-[410px] flex gap-[32px] p-[16px] rounded-sm bg-[#F7F7F7] items-center text-center">
                <div className="w-[100px] h-[100px] rounded-sm flex gap-10  p-[34px] bg-white">
                  <Image src={"/book.svg"} alt="logo" height={32} width={32} />
                </div>
                <div className=" flex flex-col text-start  ">
                  <span className=" text-[18px] font-semibold ">Finance</span>
                  <span className="font-normal ">50+ Courses Available</span>
                </div>
              </div>
              <div className="h-[132px]  w-[410px] flex gap-[32px] p-[16px] rounded-sm bg-[#F7F7F7] items-center text-center">
                <div className="w-[100px] h-[100px] rounded-sm flex gap-10  p-[34px] bg-white">
                  <Image
                    src={"/book-2.svg"}
                    alt="logo"
                    height={32}
                    width={32}
                  />
                </div>
                <div className=" flex flex-col text-start  ">
                  <h5 className=" text-[18px] font-semibold ">Consulting</h5>
                  <span className="font-normal ">50+ Courses Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="flex items-center justify-center ">
      <Button className="flex items-center justify-center text-center">View All Courses</Button>
      </div> */}
      </main>
    </>
  );
};

export default Category;
