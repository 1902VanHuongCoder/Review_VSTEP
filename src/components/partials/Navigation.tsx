import { ThemeContextType, withTheme } from "../../HOCs"



const Navigation = ({theme}:{theme?: ThemeContextType} ) => {
    return (
        <div className="px-4 sm:px-0 py-3 flex w-full justify-between items-center text-[#37B7C3] font-bold font-custom">
            <p className='font-bold text-xl text-white'><span className="text-[#071952]">VSTEP</span> REVIEW</p>
            <div className="flex items-center justify-center text-2xl text-white hover:bg-[rgba(0,0,0,.5)] px-2 pb-1 pt-2 rounded-md cursor-pointer" onClick={theme?.toggleTheme}>
                <span>{theme?.theme === 'light' ? '🌙' : '☀️'}</span><span> {theme?.theme === 'light' ? 'Dark' : 'Light'}</span>
            </div>
        </div>
    )
}

const NavigationWithTheme = withTheme(Navigation); 

export default NavigationWithTheme;