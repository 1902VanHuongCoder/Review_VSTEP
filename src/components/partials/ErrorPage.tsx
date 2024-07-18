import { Link } from "react-router-dom"

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center gap-y-3">
            <p className="text-[#071952] text-9xl font-bold">404</p>
            <Link to="/Review_VSTEP/"><button className="px-4 py-2 bg-white rounded-md shadow-md font-semibold text-[#071952]"> {'<'} Trang Chủ </button></Link>
        </div>
    )
}

export default ErrorPage