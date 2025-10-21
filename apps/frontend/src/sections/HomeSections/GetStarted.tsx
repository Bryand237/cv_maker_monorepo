import bg from "../../assets/img/Sunset-room.png";
import { motion } from "framer-motion";

const GetStarted = () => {
  return (
    <div
      className="w-screen h-screen bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="w-full h-full bg-linear-to-b from-black via-transparent to-black">
        <motion.div className="text-white w-fit h-full m-auto pt-72 text-center">
          <h1 className="text-7xl font-serif">
            Build your CV like never before.
          </h1>
          <p className="my-10 text-xl">
            Experimentez la facon la plus moderne <br /> de concevoir un CV
            autentique gratuitement,
            <br /> efficacement et rapidement.
          </p>
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="py-2 px-3 text-xl rounded-lg bg-white text-black  hover:bg-slate-200 transition-all duration-100"
          >
            Get started
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default GetStarted;
