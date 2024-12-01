import Image from "next/image";
import { Button } from "./button";
const Team = () => {
  return (
    <main className="flex h-full mt-10 justify-center  font-roboto bg-[#F7F7F7] flex-col gap-16">
      <div className="flex flex-col gap-6 items-center justify-center text-center ">
        <h1 className="text-5xl font-bold mt-14"> Our Team</h1>
        <p className="font-normal text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="gap-16 flex flex-col bg-[#F7F7F7]">
        <div className="row1 w-[100%] flex flex-col sm:flex-row items-center  gap-10 sm:gap-5 justify-center">
          <div className="flex gap-6 w-[80%]   sm:w-[50%] lg:w-[33%] items-center justify-center flex-col">
            <div>
              <Image
                src="/teampic1.png"
                alt="Team Member"
                width={80}
                height={80}
              />
            </div>
            <div className="flex text-center flex-col gap-1">
              <h5 className="text-xl font-semibold">James nauku</h5>
              <p className="text-lg font-normal">Marketting Coordinator</p>
            </div>

            <div>
              <Image
                src="/Social Icons.svg"
                alt="Team Member"
                width={80}
                height={80}
              />
            </div>
          </div>
          <div className="flex gap-6 w-[80%]  sm:w-[50%] lg:w-[33%] items-center justify-center flex-col">
            <div>
              <Image
                src="/teampic2.svg"
                alt="Team Member"
                width={80}
                height={80}
              />
            </div>
            <div className="flex text-center flex-col gap-1">
              <h5 className="text-xl font-semibold">Joseph Munyambu</h5>
              <p className="text-lg font-normal">Nursing Assistant</p>
            </div>

            <div>
              <Image
                src="/Social Icons.svg"
                alt="Team Member"
                width={80}
                height={80}
              />
            </div>
          </div>
          <div className="flex gap-6 w-[80%]   sm:w-[50%] lg:w-[33%] items-center justify-center flex-col">
            <div>
              <Image
                src="/teampic3.svg"
                alt="Team Member"
                width={80}
                height={80}
              />
            </div>
            <div className="flex text-center flex-col gap-1 ">
              <h5 className="text-xl font-semibold">Joseph  Nagumbau</h5>
              <p className="text-lg font-normal">Medical Assistant</p>
            </div>

            <div>
              <Image
                src="/Social Icons.svg"
                alt="Team Member"
                width={80}
                height={80}
              />
            </div>
          </div>
        </div>

        <div className="md:flex row2 w-[100%] flex-col sm:flex-row items-center  gap-10 sm:gap-5 justify-center sm:hidden hidden">
          <div className="flex gap-6 w-[80%]   sm:w-[50%] lg:w-[33%] items-center justify-center flex-col">
            <div>
              <Image
                src="/teampic4.svg"
                alt="Team Member"
                width={80}
                height={80}
              />
            </div>
            <div className="flex text-center flex-col gap-1">
              <h5 className="text-xl font-semibold">Erick Kipkemboi</h5>
              <p className="text-lg font-normal">President of Sales</p>
            </div>

            <div>
              <Image
                src="/Social Icons.svg"
                alt="Team Member"
                width={80}
                height={80}
              />
            </div>
          </div>
          <div className="flex gap-6 w-[80%]   sm:w-[50%] lg:w-[33%] items-center justify-center flex-col">
            <div>
              <Image
                src="/teampic5.svg"
                alt="Team Member"
                width={80}
                height={80}
              />
            </div>
            <div className="flex text-center flex-col gap-1">
              <h5 className="text-xl font-semibold">Stephen Kerubo</h5>
              <p className="text-lg font-normal">President of Sales</p>
            </div>

            <div>
              <Image
                src="/Social Icons.svg"
                alt="Team Member"
                width={80}
                height={80}
              />
            </div>
          </div>
          <div className="flex gap-6 w-[80%]   sm:w-[50%] lg:w-[33%] items-center justify-center flex-col">
            <div>
              <Image
                src="/teampic6.svg"
                alt="Team Member"
                width={80}
                height={80}
              />
            </div>
            <div className="flex text-center flex-col gap-1">
              <h5 className="text-xl font-semibold">John Leboo</h5>
              <p className="text-lg font-normal">Dog Trainer</p>
            </div>

            <div>
              <Image
                src="/Social Icons.svg"
                alt="Team Member"
                width={80}
                height={80}
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mb-8">
      <Button className="md:hidden sm:block flex items-center justify-center text-center bg-[#F7F7F7]">View All</Button>
      </div>
      </div>
    </main>
  );
};

export default Team;
