import Image from "next/image";
import { Button } from "./button";
const Courses = () => {
  return (
    <main className="h-full w-[100%] flex flex-col items-center justify-center gap-10 ">
      <div className="flex items-center text-center justify-center flex-col ">
        <h1 className="text-[40px] lg:text-[56px] flex items-center font-bold text-center mt-9">
          Courses
        </h1>
        <p>You Ultimate to Guide earning</p>
      </div>

      <div className="">
        <div className=" flex items-center justify-center mt-9 mb-11">
          <span className=" px-4 text-sm md:text-base border-b-2 border-black text-center py-2 ">
            Popular
          </span>
          <span className=" px-4 text-sm md:text-base  text-center py-2">
            Recommended
          </span>
          <span className=" px-4 text-sm md:text-base text-center py-2">
            Best Price
          </span>
        </div>

        <div className=" main  flex flex-col items-center gap-8">
          <div className=" row1 h-[47%] flex md:flex-row flex-col items-center justify-center gap-5 ">
            <div className="w-[70%] md:w-[30%]   flex gap-4 flex-col rounded-sm bg-[#F7F7F7]">
              <Image src={"/course1.svg"} alt="logo" height={300} width={416} />
              <div />
              <div className=" flex gap-5 p-3 flex-col">
                <div className="flex justify-between">
                  <span className="  font-semibold text-[14px]">Design</span>
                  <span>
                    <Image
                      src={"/star.svg"}
                      alt="logo"
                      height={24}
                      width={48}
                    />
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <h5 className="text-[18px] lg:text-2xl font-bold ">
                    UX/UI Design 201
                  </h5>
                  <span className="text-sm lg:text-base font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros.
                  </span>
                </div>
                <div className="flex">
                  <Button className="w-28 bg-[#F7F7F7]">Enroll Now</Button>
                  <span className="text-base font-medium py-1 px-7">$400</span>
                </div>
              </div>
            </div>
            <div className="w-[70%] md:w-[30%]   flex gap-4 flex-col rounded-sm bg-[#F7F7F7]">
              <Image src={"/course2.svg"} alt="logo" height={300} width={416} />
              <div />
              <div className=" flex gap-5 p-3 flex-col">
                <div className="flex justify-between">
                  <span className="  font-semibold text-[14px]">Design</span>
                  <span>
                    <Image
                      src={"/star.svg"}
                      alt="logo"
                      height={24}
                      width={48}
                    />
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <h5 className="text-[18px] lg:text-2xl font-bold ">
                    Introduction to the python
                  </h5>
                  <span className="text-sm lg:text-base font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros.
                  </span>
                </div>
                <div className="flex">
                  <Button className="w-28 bg-[#F7F7F7]">Enroll Now</Button>
                  <span className="text-base font-medium py-1 px-7">$400</span>
                </div>
              </div>
            </div>
            <div className="w-[70%] md:w-[30%]   flex gap-4 flex-col rounded-sm bg-[#F7F7F7]">
              <Image src={"/course3.svg"} alt="logo" height={300} width={416} />
              <div />
              <div className=" flex gap-5 p-3 flex-col">
                <div className="flex justify-between">
                  <span className="  font-semibold text-[14px]">Design</span>
                  <span>
                    <Image
                      src={"/star.svg"}
                      alt="logo"
                      height={24}
                      width={48}
                    />
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <h5 className="text-[18px] lg:text-2xl font-bold ">
                    Data Analysis to Beginners
                  </h5>
                  <span className="text-sm lg:text-base font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros.
                  </span>
                </div>
                <div className="flex">
                  <Button className="w-28 bg-[#F7F7F7]">Enroll Now</Button>
                  <span className="text-base font-medium py-1 px-7">$400</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" row2 mt-9 h-[47%] flex md:flex-row flex-col items-center justify-center gap-5 ">
          <div className="w-[70%] md:w-[30%]   flex gap-4 flex-col rounded-sm bg-[#F7F7F7]">
            <Image src={"/course4.svg"} alt="logo" height={300} width={416} />
            <div />
            <div className=" flex gap-5 p-3 flex-col">
              <div className="flex justify-between">
                <span className="  font-semibold text-[14px]">Design</span>
                <span>
                  <Image src={"/star.svg"} alt="logo" height={24} width={48} />
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h5 className="text-[18px] lg:text-2xl font-bold ">
                  Arts Spectialization
                </h5>
                <span className="text-sm lg:text-base font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </span>
              </div>
              <div className="flex">
                <Button className="w-28 bg-[#F7F7F7]">Enroll Now</Button>
                <span className="text-base font-medium py-1 px-7">$400</span>
              </div>
            </div>
          </div>
          <div className="w-[70%] md:w-[30%]   flex gap-4 flex-col rounded-sm bg-[#F7F7F7]">
            <Image src={"/course5.svg"} alt="logo" height={300} width={416} />
            <div />
            <div className=" flex gap-5 p-3 flex-col">
              <div className="flex justify-between">
                <span className="  font-semibold text-[14px]">Design</span>
                <span>
                  <Image src={"/star.svg"} alt="logo" height={24} width={48} />
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h5 className="text-[18px] lg:text-2xl font-bold ">
                  Rule of Law
                </h5>
                <span className="text-sm lg:text-base font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </span>
              </div>
              <div className="flex">
                <Button className="w-28 bg-[#F7F7F7]">Enroll Now</Button>
                <span className="text-base font-medium py-1 px-7">$400</span>
              </div>
            </div>
          </div>
          <div className="w-[70%] md:w-[30%]   flex gap-4 flex-col rounded-sm bg-[#F7F7F7]">
            <Image src={"/course6.svg"} alt="logo" height={300} width={416} />
            <div />
            <div className=" flex gap-5 p-3 flex-col">
              <div className="flex justify-between">
                <span className="  font-semibold text-[14px]">Design</span>
                <span>
                  <Image src={"/star.svg"} alt="logo" height={24} width={48} />
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h5 className="text-[18px] lg:text-2xl font-bold ">
                  Introduction to Webflow
                </h5>
                <span className="text-sm lg:text-base font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </span>
              </div>
              <div className="flex">
                <Button className="w-28 bg-[#F7F7F7]">Enroll Now</Button>
                <span className="text-base font-medium py-1 px-7">$400</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center mt-8 ">
          <Button className="flex items-center justify-center text-center">
            View All Courses
          </Button>
        </div>
      </div>
    </main>
  );
};

export default Courses;
