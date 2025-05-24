import { FaCss3Alt, FaHtml5, FaJs } from "react-icons/fa";
import Tensorflow from "../../../assets/images/SVG/tensorflow.svg";
import TeachableMachine from "../../../assets/images/Webp/teachable-image.webp";

const TMIMProjectDetailData = {
  timeline: "Apr 2024",
  stack: [
    <FaHtml5 className="w-12 h-12 text-[#E34F26]" />,
    <FaCss3Alt className="w-12 h-12 text-[#1572B6]" />,
    <FaJs className="w-12 h-12 text-[#F0DB4F]" />,
    <img src={TeachableMachine} alt="Material UI" className="w-11 h-11" />,
    <img src={Tensorflow} alt="Material UI" className="w-11 h-11" />,
  ],
};

export default TMIMProjectDetailData;