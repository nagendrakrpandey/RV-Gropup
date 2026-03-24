import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import WeImage from "@/assets/34.png";
export default function Core() {
  return (
   <div className="bg-black min-h-screen flex flex-col">
      <Header />
      {/* Full Screen Image Section */}
      <div className="flex-1 flex items-center justify-center bg-black ">
        <motion.img
          src={WeImage}
          alt="RV Group"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}