import Image from "next/image";
import Link from "next/link";
export const Header = () => {
  return (
    <>
      <header className=" flex flex-col gap-2">
        <div className=" h-[54px] hidden items-center justify-center bg-[#F7F7F7] md:flex">
          <div className=" w-[90%] flex justify-between items-center">
            <div className=" flex gap-3">
              <span className=" text-sm">Phone Number: 956 742 455 678</span> |
              <span className=" text-sm ">Email:info@ddsgnr.com</span>
            </div>
            <div className="flex gap-3 cursor-pointer">
              <Image src={"/Facebook.svg"} alt="Logo" width={20} height={20} />
              <Image src={"/Instagram.svg"} alt="Logo" width={20} height={20} />
              <Image src={"/Twitter.svg"} alt="Logo" width={20} height={20} />
              <Image src={"/LinkedIn.svg"} alt="Logo" width={20} height={20} />
            </div>
          </div>
        </div>

        <div className=" h-[72px] flex items-center justify-center bg-[#F7F7F7] cursor-pointer">
          <div className=" h-[44px] w-[90%] justify-between flex items-center">
            <div className="flex gap-1">
              <Image src={"/Frame 1.svg"} alt="logo" height={30} width={32} />
              <span className=" text-[25px] font-bold">Ddsgnr</span>
            </div>

            <nav className=" bg-[#FFFFFF] gap-8 hidden lg:flex items-center pl-4">
              <ul className=" flex gap-10 items-center">
                <li>
                  {" "}
                  <Link href="/home">Home</Link>
                </li>
                <li>
                  {" "}
                  <Link href="/home">Courses</Link>
                </li>
                <li>
                  {" "}
                  <Link href="/home">Services</Link>
                </li>
                <li>
                  {" "}
                  <Link href="/home">Achievement</Link>
                </li>
                <li>
                  {" "}
                  <Link href="/home">About Us</Link>
                </li>
                <li>
                  {" "}
                  <Link href="/home">Testimonial</Link>
                </li>
              </ul>

              <div className=" flex gap-1">
                <button className=" rounded-lg py-[8px] px-[20px] border border-[#000000]">
                  Login
                </button>
                <button className=" rounded-lg py-[8px] px-[20px] border bg-[#000000] text-white">
                  Sign Up
                </button>
              </div>
            </nav>
            <div className="block lg:hidden">
              <Image
                src={"/bars-solid.svg"}
                alt={"Logo"}
                width={20}
                height={48}
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
