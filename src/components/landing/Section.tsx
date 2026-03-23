import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { SectionProps } from "@/types"

export default function Section({ id, title, subtitle, content, items, groups, table, schema, image, tag, isActive, showButton, buttonText }: SectionProps) {
  return (
    <section id={id} className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-14 lg:p-20 overflow-hidden">
      {tag && (
        <motion.div
          className="mb-5"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
        >
          <Badge variant="outline" className="text-[#00BFFF] border-[#00BFFF] text-xs tracking-widest uppercase">{tag}</Badge>
        </motion.div>
      )}
      {subtitle && (
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {subtitle}
        </motion.div>
      )}

      <div className={image ? "flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-16" : ""}>
        <div className="flex-1 min-w-0">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] tracking-tight text-white"
            initial={{ opacity: 0, y: 40 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h2>

          {content && (
            <motion.p
              className="text-base md:text-lg lg:text-xl max-w-2xl mt-5 text-neutral-400 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              {content}
            </motion.p>
          )}

          {items && items.length > 0 && (
            <motion.ul
              className="mt-5 space-y-2 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {items.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-neutral-300 text-sm md:text-base">
                  <span className="text-[#00BFFF] mt-0.5 shrink-0">▸</span>
                  {item}
                </li>
              ))}
            </motion.ul>
          )}

          {groups && groups.length > 0 && (
            <motion.div
              className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {groups.map((group, gi) => (
                <div key={gi} className="border border-neutral-800 rounded-xl p-4 bg-white/[0.02]">
                  <div className="text-[#00BFFF] text-xs font-semibold uppercase tracking-wider mb-3">{group.label}</div>
                  <ul className="space-y-1.5">
                    {group.items.map((item, ii) => (
                      <li key={ii} className="flex items-start gap-2 text-neutral-300 text-sm">
                        <span className="text-neutral-500 mt-0.5 shrink-0">–</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          )}

          {table && (
            <motion.div
              className="mt-5 overflow-x-auto max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-neutral-700">
                    {table.headers.map((h, i) => (
                      <th key={i} className="text-left py-2 px-3 text-[#00BFFF] font-semibold text-xs uppercase tracking-wider">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {table.rows.map((row, ri) => (
                    <tr key={ri} className="border-b border-neutral-800/60 hover:bg-white/[0.02] transition-colors">
                      {row.map((cell, ci) => (
                        <td key={ci} className="py-2 px-3 text-neutral-300">{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          )}

          {schema && (
            <motion.div
              className="mt-5 max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <pre className="text-[10px] md:text-xs text-neutral-400 font-mono leading-snug overflow-x-auto bg-white/[0.03] border border-neutral-800 rounded-xl p-4 whitespace-pre">
                {schema}
              </pre>
            </motion.div>
          )}

          {showButton && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-8"
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
            className="shrink-0 w-full lg:w-[360px] xl:w-[420px]"
            initial={{ opacity: 0, x: 60 }}
            animate={isActive ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <img src={image} alt="robot" className="rounded-2xl w-full object-cover max-h-[380px] lg:max-h-[460px] border border-neutral-800" />
          </motion.div>
        )}
      </div>
    </section>
  )
}
