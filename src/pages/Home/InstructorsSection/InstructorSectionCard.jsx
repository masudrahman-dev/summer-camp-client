import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const InstructorSectionCard = ({ image, name }) => {
  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <div className="relative ">
        <img className="shadow-xl rounded-xl w-full   " src={image} alt="" />
        {/* "https://bridgemusic.in/wp-content/uploads/2017/10/guitar-inst.webp" */}
        <Link to={"/instructors"} className="absolute top-8 right-8 ">
          <p className="badge badge-primary uppercase p-4 hover:bg-fuchsia-500 hover:border-none ">
            {name}
          </p>
        </Link>
      </div>
    </motion.div>
  );
};

export default InstructorSectionCard;
