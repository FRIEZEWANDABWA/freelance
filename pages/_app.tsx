import type { AppProps } from 'next/app'
import '../styles/globals.css'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  
  return (
    <AnimatePresence mode="wait">
      <motion.div key={router.route}
        initial="pageInitial"
        animate="pageAnimate"
        exit="pageExit"
        variants={{
          pageInitial: {
            opacity: 0,
            y: 20
          },
          pageAnimate: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.4
            }
          },
          pageExit: {
            opacity: 0,
            y: -20,
            transition: {
              duration: 0.3
            }
          }
        }}
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  )
}