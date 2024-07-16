import { ClockLoader } from "react-spinners"

const Loading = () => {
    return (
        <div className="w-screen h-screen fixed top-0 left-0 bg-[rgba(0,0,0,.5)] flex justify-center items-center font-custom flex-col gap-y-3 text-white">
            <ClockLoader
                color="#ffffff"
                loading
                size={60}
                speedMultiplier={2}
            />
            <p>Loading . . .</p>
        </div>
    )
}

export default Loading;