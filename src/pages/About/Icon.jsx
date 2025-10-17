// src/pages/About/icons.jsx
import { FaCode } from "react-icons/fa";
import { SiReact, SiMongodb, SiExpress, SiFirebase, SiTailwindcss, SiNodedotjs, SiJavascript } from "react-icons/si";

// Tech Icons
export const ReactLogo = () => <SiReact size={40} color="#61DAFB" />;
export const MongoDBLogo = () => <SiMongodb size={40} color="#4DB33D" />;
export const ExpressLogo = () => <SiExpress size={40} color="#000000" />;
export const FirebaseLogo = () => <SiFirebase size={40} color="#FFCA28" />;
export const TailwindLogo = () => <SiTailwindcss size={40} color="#38BDF8" />;
export const NodeLogo = () => <SiNodedotjs size={40} color="#339933" />;
export const JSLogo = () => <SiJavascript size={40} color="#F7DF1E" />;

// Optional: You can keep PimjoLogo as a central icon
export const PimjoLogo = () => <FaCode size={50} color="#61DAFB" />;
