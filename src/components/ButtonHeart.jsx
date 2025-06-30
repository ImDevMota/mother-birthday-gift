import { useNavigate } from "react-router-dom";

function ButtonHeart() {
  const navigate = useNavigate();

  return (
    <div className="relative w-[85%] h-screen overflow-hidden">
      <button
        onClick={() => navigate("/surprise")}
        id="ButtonHeart"
        className={`text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 border-[3px] rounded-md border-[#ffaec7] font-bold px-[1rem] pr-[1.5rem] py-[0.5rem]`}
      >
        ❤️Click
      </button>
    </div>
  );
}

export default ButtonHeart;
