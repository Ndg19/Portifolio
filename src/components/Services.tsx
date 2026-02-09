import { Code, Columns, Laptop, Layout, PenTool, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      icon: <Layout className="w-12 h-12 text-yellow-500 mb-6 group-hover:scale-110 transition-transform" />,
      title: "Web Design",
      description: "Creating visually appealing and user-friendly website designs that align with your brand."
    },
    {
      icon: <Code className="w-12 h-12 text-yellow-500 mb-6 group-hover:scale-110 transition-transform" />,
      title: "Web Development",
      description: "Building responsive, high-performance websites and web applications using modern technologies."
    },
    {
      icon: <Smartphone className="w-12 h-12 text-yellow-500 mb-6 group-hover:scale-110 transition-transform" />,
      title: "App Development",
      description: "Developing mobile applications for iOS and Android platforms with exceptional user experiences."
    },
    {
      icon: <PenTool className="w-12 h-12 text-yellow-500 mb-6 group-hover:scale-110 transition-transform" />,
      title: "Branding",
      description: "Crafting cohesive brand identities including logos, color schemes, and visual assets."
    },
    {
      icon: <Columns className="w-12 h-12 text-yellow-500 mb-6 group-hover:scale-110 transition-transform" />,
      title: "UI/UX Design",
      description: "Designing intuitive user interfaces and interactions that enhance user satisfaction."
    },
    {
      icon: <Laptop className="w-12 h-12 text-yellow-500 mb-6 group-hover:scale-110 transition-transform" />,
      title: "Digital Strategy",
      description: "Capturing high-quality insights to showcase your products and brand in the best light."
    }
  ];

  return (
    <section id="services" className="py-24 bg-obsidian border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-20 relative z-10">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-yellow-500 font-bold tracking-[0.3em] uppercase text-xs mb-4"
          >
            My Expert Area
          </motion.span>
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-6">
            Services <span className="text-gray-700">Offered</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            className="h-1 bg-yellow-500 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group bg-white/5 backdrop-blur-md p-10 rounded-3xl border border-white/5 hover:border-yellow-500/30 transition-all duration-500 hover:bg-white/10"
            >
              <div className="flex justify-center md:justify-start">
                <div className="p-4 bg-gray-950 rounded-2xl mb-2 shadow-inner group-hover:bg-yellow-500/10 transition-colors">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-2xl font-black mb-4 text-white uppercase tracking-tight group-hover:text-yellow-500 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 font-light leading-relaxed mb-4">
                {service.description}
              </p>
              <div className="h-0.5 w-0 bg-yellow-500 group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;