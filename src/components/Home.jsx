import React, {useState, useEffect} from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import 'animate.css';

const Home = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(200 - Math.random() * 10);
  const [index, setIndex] = useState(1);
  const toRotate = [ "frontend engineer", "web developer", "proud Indian" ];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(200);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }
  return (
    <div
      name="home"
      className="pt-32 lg:pt-48 px-8 lg:px-40"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-2">
        <div className="col-span-1 lg:col-span-2">
          <h1 className="flex text-2xl sm:text-5xl font-bold text-white">
            <span>Hello </span><span class="animate-waving-hand">👋🏻</span>,
          </h1>
          <h1 className="flex text-2xl sm:text-5xl font-bold text-white">
            <div>I am&nbsp;</div> <div className="red-text">Mohit Saraswat</div>
          </h1>
          <div className="animate__animated animate__fadeIn text-2xl sm:text-5xl font-bold text-white">
            <h1>{`I am a `}<span className="txt-rotate" dataPeriod="1000" data-rotate='[ "frontend engineer", "web developer", "proud Indian" ]'><span className="wrap red-text">{text}</span></span><span className="typewriter"></span></h1>
          </div>
          <p className="py-4 max-w-md text-white text-lg">
            I am a <span className="red-text">Frontend Engineer</span> with more than <span className="red-text">8 years</span> of experience comprising extensive use of various frontend frameworks and libraries like Angular and React.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-none border-red-400 border-2 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className="col-span-1 lg:col-span-1">
          <div className="image-container">
            <img
              src={HeroImage}
              alt="my profile"
              className="rounded-full mx-auto md:w-full shadow-[0_20px_50px_rgba(240,_79,_79,_0.6)]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
