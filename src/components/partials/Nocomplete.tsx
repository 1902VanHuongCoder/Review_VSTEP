import { motion } from "framer-motion"

const Nocomplete = () => {
    return (
        <motion.div
            initial={{
                bottom: '-100%'
            }}
            animate={{
                bottom: 0,
            }}

            exit={{
                bottom: '-100%'
            }}
            transition={{
                duration: .5
            }}
            className="w-[100%] sm:w-[85%] h-[80%] fixed bottom-0 left-[50%] translate-x-[-50%] flex justify-center items-center flex-col gap-y-2 bg-white rounded-tr-lg rounded-tl-lg border-[2px] border-solid border-slate-300 shadow-lg">
            <div className="w-[100px] flex flex-col gap-y-2">
                <svg viewBox="0 0 53.19 53.19">
                    <g>
                        <motion.circle
                            stroke="#E4003A"
                            strokeWidth={3}
                            fill="transparent"
                            cx={26.59}
                            cy={26.59}
                            r={24}
                            initial={{
                                scale: 0,
                                opacity: 0,
                            }}
                            animate={{
                                scale: 1,
                                opacity: 1,
                            }}

                            exit={{
                                scale: 0,
                                opacity: 0,
                            }}
                        />
                        <motion.path
                            stroke="#E4003A"
                            strokeWidth={3}
                            strokeLinecap="round"
                            fill="transparent"
                            d="M14 14 L40 40 M40 14 L14 40"
                            initial={{
                                opacity: 0,
                                pathLength: 0,
                            }}
                            animate={{
                                opacity: 1,
                                pathLength: 1,
                            }}
                            exit={{
                                opacity: 0,
                                pathLength: 0,
                            }}
                            transition={{
                                delay: 0.2,
                                duration: 0.5,
                            }}
                        />
                    </g>
                </svg>

            </div>
            <motion.h1 className="font-custom text-[#071952] font-bold text-xl" initial={{
                y: 30, opacity: 0,
            }} animate={{
                y: 0,
                opacity: 1
            }}
                transition={{
                    delay: 0.3,
                    duration: 0.7
                }}
            >

                Không thành công <br />
                Hãy thử lại
            </motion.h1>
        </motion.div>
    )
}

export default Nocomplete