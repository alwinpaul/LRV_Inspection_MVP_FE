import logo from "./../../assets/KEOLIS_R.webp"

const Header = () => {
    return (
        <div className="h-6 sm:h-[60px]">
            <div className="mb-8 sm:mb-3 bg-keolis py-3 fixed left-0 top-0 z-10">
                <img className="w-4/12 sm:w-1/12" src={logo} alt="client-logo" />
            </div>
        </div>

    )
}

export default Header