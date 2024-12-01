const Achievment = () => {
  return (
    <div className="h-[488px]  flex flex-col justify-center items-center  mt-28 bg-[#FFFFFF]">
      <div className="flex w-[90%] h-[85%] gap-10 flex-col justify-center items-center ">
        <div className="flex text-center justify-center items-center flex-col gap-5">
          <h2 className="font-bold text-4xl sm:text-5xl flex text-center items-center">
            Our Achievement
          </h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut arcu
            eget libero sagittis rutrum. Nulla facilisi. Donec dignissim, felis
            ut tempus convallis, velit lectus consectetur neque, sed vulputate
            ex ligula non nisi. Sed vel velit sit amet nunc consectetur posuere.
          </p>
        </div>

        <div className="main flex lg:flex-row flex-col justify-center w-[100%] gap-10">
          <div className=" row1 flex w-[100%]  lg:w-[50%] gap-5">
            <div className="card1 w-[50%] flex flex-col justify-center items-center">
              <span className="font-bold text-[40px]">+200 </span>
              <span className="font-normal text-[16px]">courses</span>
            </div>
            <div className="card2 w-[50%] flex flex-col justify-center items-center">
              <span className="font-bold text-[40px]">+150 </span>
              <span className="font-normal text-[16px]">students</span>
            </div>
          </div>

          <div className="row2 flex w-[100%] lg:w-[50%]">
            <div className="card2 w-[50%] flex flex-col justify-center items-center">
              <span className="font-bold text-[40px]">+150 </span>
              <span className="font-normal text-[16px]">students</span>
            </div>
            <div className="card2 w-[50%] flex flex-col justify-center items-center">
              <span className="font-bold text-[40px]">+150 </span>
              <span className="font-normal text-[16px]">students</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievment;
