import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";
const AutoplaySlider = withAutoplay(AwesomeSlider);
import AwesomeSliderStyles from "react-awesome-slider/dist/";

/**
 * https://bridgemusic.in/wp-content/uploads/2022/09/IMG_6357.jpg
 * https://bridgemusic.in/wp-content/uploads/2022/09/IMG_7127.jpg
 * https://bridgemusic.in/wp-content/uploads/2022/09/IMG_6476.jpg

 * https://bridgemusic.in/wp-content/uploads/2022/10/testimonial-bg-img.webp
 * faculty---------
 * https://bridgemusic.in/wp-content/uploads/2022/10/faculty_piano.jpg
 *  https://bridgemusic.in/wp-content/uploads/2022/10/faculty_guitar.jpg
 * https://bridgemusic.in/wp-content/uploads/2022/10/faculty_drum.jpg
 * https://bridgemusic.in/wp-content/uploads/2022/10/faculty_singing.jpg
 * https://bridgemusic.in/wp-content/uploads/2022/10/faculty_baseguitar.jpg
 * https://bridgemusic.in/wp-content/uploads/2022/10/faculty_keyboard.jpg
 * https://bridgemusic.in/wp-content/uploads/2022/10/faculty_volini.jpg
 */

const Banner = () => {
  const image =
    "https://bridgemusic.in/wp-content/uploads/2022/09/IMG_6784.jpg";

  const slider = (
    <AutoplaySlider
      play={true}
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={1000}
      cssModule={AwesomeSliderStyles}
    >
      <div>
        <img
          className="mix-blend-multiply"
          src="https://bridgemusic.in/wp-content/uploads/2022/09/IMG_6784.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          className="mix-blend-multiply"
          src="https://bridgemusic.in/wp-content/uploads/2022/09/IMG_6784.jpg"
          alt=""
        />
      </div>

      <div>
        <img
          className="mix-blend-multiply"
          src="https://bridgemusic.in/wp-content/uploads/2022/09/IMG_6784.jpg"
          alt=""
        />
      </div>
    </AutoplaySlider>
  );
  return (
    <>
      <div className="relative ">
        <div className="z-30 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  ">
          <div className="text-center p-12">
            <div className="max-w-2xl mb-4  text-xl font-extrabold tracking-wide md:text-7xl  dark:text-white ">
              <p> Music is Heart Of Love </p>
            </div>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-white">
              Setting Gold Standards since 2009.the core of a rhythm section in
              a band. This is purely a rhythm instrument and is not really
              capable of playing the melody or harmony. Often referred to as the
              timekeepers of the band, drummers play a very crucial role is
              keeping the band together and contribute considerably to the
              energy and momentum of the music. Students learning drums master
              their rudiments and gain technical command over different styles
              of music such as Rock, Pop, Jazz, Reggae, etc.
            </p>
          </div>
        </div>
        {slider}
      </div>
    </>
  );
};

export default Banner;

