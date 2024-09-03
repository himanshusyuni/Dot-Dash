import { useNavigate } from "react-router-dom";
import Dot from "./Dot";
import { TypeAnimation } from "react-type-animation";

function LandingPage() {
  const navigate = useNavigate("");
  return (
    <>
      <div className=" w-[50%] top-[150px] ml-[25%] bg-sky-200 z-20 absolute">
        <div className="m-3">

        <TypeAnimation
          className="font-serif font-bold text-lg  text-center  text-red-800"
          sequence={[
              // Same substring at the start will only be typed out once, initially
              `Welcome to Dot-Dash! In this fast-paced game, you have 15 seconds to
              test your reflexes. Each second, a dot will appear at a random
              location on the screen. Your goal is to click as many dots as possible
              before they disappear. The more dots you click, the higher your score!
              Can you beat your high score and become the ultimate Dot Clicker
              champion? Get ready, stay focused, and start clicking!`,
              1500,
            ]}
            wrapper="span"
            speed={50}
            repeat={2}
            />
            </div>
        <div className="items-center flex justify-center p-3">
          <button
            className="p-2 bg-green-600 text-xl font-bold rounded-lg hover:bg-green-800 active:bg-purple-700 text-white"
            onClick={() => navigate("/game")}
          >
            {" "}
            START GAME{" "}
          </button>
        </div>
      </div>
    </>
  );
}
export default LandingPage;
