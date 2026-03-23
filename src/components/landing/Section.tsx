import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { SectionProps } from "@/types"

export default function Section({ id, title, subtitle, content, items, image, tag, isActive, showButton, buttonText }: SectionProps) {
  return (
    <section id={id} className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 lg:p-24">
      {tag && (
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
        >
          <Badge variant="outline" className="text-[#00BFFF] border-[#00BFFF] text-sm tracking-widest uppercase">{tag}</Badge>
        </motion.div>
      )}
      {subtitle && (
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {subtitle}
        </motion.div>
      )}
      <div className={image ? "flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-20" : ""}>
        <div className="flex-1">
          <motion.h2
            className="text-4xl md:text-5xl lg:text-[4.5rem] xl:text-[5.5rem] font-bold leading-[1.1] tracking-tight max-w-4xl text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h2>
          {content && (
            <motion.p
              className="text-lg md:text-xl lg:text-2xl max-w-2xl mt-6 text-neutral-400 leading-relaxed"
              initial={{ opacity: 0, y: 50 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {content}
            </motion.p>
          )}
          {items && items.length > 0 && (
            <motion.ul
              className="mt-6 space-y-3 max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {items.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-neutral-300 text-base md:text-lg">
                  <span className="text-[#00BFFF] mt-1 shrink-0">▸</span>
                  {item}
                </li>
              ))}
            </motion.ul>
          )}
          {showButton && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 md:mt-14"
            >
              <Button
                variant="outline"
                size="lg"
                className="text-[#00BFFF] bg-transparent border-[#00BFFF] hover:bg-[#00BFFF] hover:text-black transition-colors"
              >
                {buttonText}
              </Button>
            </motion.div>
          )}
        </div>
        {image && (
          <motion.div
            className="shrink-0 w-full lg:w-[380px] xl:w-[440px]"
            initial={{ opacity: 0, x: 60 }}
            animate={isActive ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <img src={image} alt="robot" className="rounded-2xl w-full object-cover max-h-[400px] lg:max-h-[500px] border border-neutral-800" />
          </motion.div>
        )}
      </div>
    </section>
  )
}