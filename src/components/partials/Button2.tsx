const Button2 = ({ label }: { label: string }) => {
    return (
        <div className="mt-[10px] sm:mt-0 border-[2px] border-solid border-[#37B7C3] px-10 bg-white rounded-lg py-3 shadow-md hover:shadow-xl hover:opacity-80 transition-shadow cursor-pointer font-bold text-lg group w-fit">
            <button className="text-[#071952] flex justify-center items-center ">
                <span>{label}</span>{" "}
            </button>
        </div>
    )
}

export default Button2