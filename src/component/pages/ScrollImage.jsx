import profile1 from "../../assets/slider1.jpg";
import profile2 from "../../assets/slider2.jpg";
import profile3 from "../../assets/slider3.jpg";
import profile4 from "../../assets/slider4.jpg";
import profile5 from "../../assets/slider5.jpg";
import profile6 from "../../assets/slider6.jpg";
import profile7 from "../../assets/slider7.jpg";
import profile8 from "../../assets/slider8.jpg";
import profile9 from "../../assets/slider9.jpg";
import profile10 from "../../assets/slider10.jpg";
import profile11 from "../../assets/slider11.jpg";
import profile12 from "../../assets/slider12.jpg";
import profile13 from "../../assets/slider13.jpg";
import profile14 from "../../assets/slider14.jpg";
// import profile15 from "../../assets/slider15.jpg";
// import profile16 from "../../assets/slider16.jpg";


export default function ScrollImage() {
  return (
    <div className="w-full overflow-hidden bg-black">
      <div className="flex hover:animate-scroll">
        <img
          src={profile1}
          alt="scrolling"
          className="h-64 w-auto"
        />
        <img
          src={profile2}
          alt="scrolling"
          className="h-64 w-auto"
        />
        <img
          src={profile3}
          alt="scrolling"
          className="h-64 w-auto"
        />
        <img
          src={profile4}
          alt="scrolling"
          className="h-64 w-auto"
        />
        <img
          src={profile5}
          alt="scrolling"
          className="h-64 w-auto"
        />
        <img
          src={profile6}
          alt="scrolling"
          className="h-64 w-auto"
        />
        <img
          src={profile7}
          alt="scrolling"
          className="h-64 w-auto"
        />
        <img
          src={profile8}
          alt="scrolling"
          className="h-64 w-auto"
        />
        <img
          src={profile9}
          alt="scrolling"
          className="h-64 w-auto"
        />
        <img
          src={profile10}
          alt="scrolling"
          className="h-64 w-auto"
        />
        <img
          src={profile11}
          alt="scrolling"
          className="h-64 w-auto"
        />
        <img
          src={profile12}
          alt="scrolling"
          className="h-64 w-auto"
        />
        <img
          src={profile13}
          alt="scrolling"
          className="h-64 w-auto"
        />
        <img
          src={profile14}
          alt="scrolling"
          className="h-64 w-auto"
        />
        
      </div>

    </div>
  );
}
