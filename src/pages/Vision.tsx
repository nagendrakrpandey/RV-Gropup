// import { motion } from "framer-motion";
// import { Header } from "@/components/Header";
// import WeImage from "@/assets/33h.jpg";
// export default function Vision() {
//   return (
//    <div className="bg-black min-h-screen flex flex-col">
//       <Header />
//       {/* Full Screen Image Section */}
//       <div className="flex-1 flex items-center justify-center bg-black ">
//         <motion.img
//           src={WeImage}
//           alt="RV Group"
//           initial={{ opacity: 0, scale: 1.1 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1.2 }}
//           className="w-full h-full object-contain"
//         />
//       </div>
//     </div>
//   );
// }

import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import WeImage from "@/assets/33h.jpg";

export default function Vision() {
  return (
    <main
      className="min-h-screen bg-black bg-no-repeat bg-left bg-cover md:bg-contain flex flex-col relative overflow-y-auto"
      style={{ 
        backgroundImage: `url(${WeImage})`,
        backgroundPosition: 'left center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="fixed inset-0 bg-black/50 md:bg-black/30" />
      
      <Header />

      {/* Content Section - Added top padding to prevent cutting */}
      <section className="relative z-10 flex-1 flex items-start justify-center md:justify-end px-4 sm:px-6 lg:px-8 py-20 md:py-16 lg:py-20 mt-16 md:mt-20">
        
        <article className="w-full md:w-3/5 lg:w-1/2 xl:w-1/2 max-w-3xl space-y-8 md:space-y-10 backdrop-blur-sm md:backdrop-blur-none bg-black/30 md:bg-transparent p-6 md:p-8 rounded-lg md:rounded-none">
          
          {/* Vision */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-yellow-500">
              Our Vision
            </h1>

            <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
              To become one of the most trusted and admired names in the IMFL
              industry, delivering international-quality premium spirits while
              consistently elevating consumer experiences. From distribution
              excellence to brand ownership, the Group is shaping the future
              of Indian spirits with innovation, integrity, and ambition.
            </p>
          </motion.section>

          {/* Mission */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-yellow-500">
              Our Mission
            </h1>

            <p className="text-sm sm:text-base text-gray-200">
              To build globally relevant Indian liquor brands, with a strong focus on:
            </p>

            <ul className="list-disc list-inside text-sm sm:text-base text-gray-200 space-y-2 ml-2">
              <li className="leading-relaxed">Premium IMFL product development</li>
              <li className="leading-relaxed">Nationwide distribution and retail expansion</li>
              <li className="leading-relaxed">Export-oriented growth and overseas market presence</li>
              <li className="leading-relaxed">Long-term investments in distillation and brand equity</li>
            </ul>

            <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
              All guided by a customer-first mindset and sustainable business practices.
            </p>
          </motion.section>

          {/* Leadership */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4"
          >
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-100">
              Leadership Philosophy
            </h2>

            <div className="space-y-3">
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                At RV Refresh Liquors India Pvt. Ltd., we create spirits that go
                beyond the ordinary—crafted to elevate moments and define lifestyles.
                Our pursuit is to set international benchmarks in quality and
                innovation while celebrating the artistry of fine spirits.
              </p>

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Leadership at R.V. Group is defined by foresight, integrity,
                and collaboration. The promoters bring together diverse expertise
                and complementary strengths, ensuring strategic alignment and
                long-term value creation for stakeholders.
              </p>

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                The Group is committed to building self-sustaining brands across
                categories while harmonising people, processes, and infrastructure
                for profitable and responsible growth.
              </p>
            </div>
          </motion.section>

        </article>

      </section>
    </main>
  );
}