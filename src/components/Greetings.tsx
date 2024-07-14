import Button1 from "./partials/Button1";

const Greetings = () => {
  return (
    <div className="w-full h-full flex justify-center items-center flex-col gap-y-1 sm:gap-y-3 font-custom sm:leading-[100px]">
      <h1 className="text-[40px] sm:text-[96px] text-white font-bold drop-shadow-lg">
        ÔN TẬP{" "}
        <span className="bg-gradient-to-tr from-[#071952] from-80% to-[rgba(255,255,255,1)] to-90% text-transparent bg-clip-text">
          V-STEP
        </span>
      </h1>
      <h1 className="text-[40px] sm:text-[96px] text-white font-medium drop-shadow-lg text-center">
        Let's review VSTEP
      </h1>
      <div className="text-[20px] sm:text-lg  sm:leading-[65px] px-2 text-white font-bold leading-[30px] text-center">
        Trang web này sẽ giúp các bạn luyện tập ghép các câu tiếng anh một cách
        dễ dàng từ cơ bản đến nâng cao.
      </div>
      <Button1 />
    </div>
  );
};

export default Greetings;
