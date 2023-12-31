import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faClipboard, faEnvelope, faListCheck, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import BrowseListings from "./BrowseListings.jsx";
import ApplicationHistory from "./ApplicationHistory.jsx";
import Blog from "./Blog.jsx";
import ContactUs from "./ContactUs.jsx";

const Header = () => {
    const [activeButton, setActiveButton] = useState("browseListings");

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };

    const renderComponent = () => {
        switch (activeButton) {
            case "browseListings":
                return <BrowseListings />;
            case "appHistory":
                return <ApplicationHistory />;
            case "blog":
                return <Blog />;
            case "contact":
                return <ContactUs />;
            default:
                return null;
        }
    };

    return (
        <>
            <div className="flex justify-between h-16 items-center bg-[#FFFFFF]">
                <div className="self-center px-12 text-2xl text-[#030303] font-bold">InternBrand</div>
                <div className="flex self-center text-[#667085] font-bold">
                    <button
                        className={`flex ${activeButton === "browseListings" ? "text-[#6938EF]" : ""}`}
                        onClick={() => handleButtonClick("browseListings")}
                    >
                        <div>
                            <FontAwesomeIcon icon={faClipboard} style={{ color: "#6938EF" }} />
                        </div>
                        <div className="px-2 pr-4 font-medium">Browse Listings</div>
                    </button>
                    <button
                        className={`flex ${activeButton === "appHistory" ? "text-[#6938EF]" : ""}`}
                        onClick={() => handleButtonClick("appHistory")}
                    >
                        <div>
                            <FontAwesomeIcon icon={faListCheck} style={{ color: "#6938EF" }} />
                        </div>
                        <div className="px-2 pr-4 font-medium">Application History</div>
                    </button>
                    <button
                        className={`flex ${activeButton === "blog" ? "text-[#6938EF]" : ""}`}
                        onClick={() => handleButtonClick("blog")}
                    >
                        <div>
                            <FontAwesomeIcon icon={faPenToSquare} style={{ color: "#6938EF" }} />
                        </div>
                        <div className="px-2 pr-4 font-medium">Blog</div>
                    </button>
                    <button
                        className={`flex ${activeButton === "contact" ? "text-[#6938EF]" : ""}`}
                        onClick={() => handleButtonClick("contact")}
                    >
                        <div>
                            <FontAwesomeIcon icon={faEnvelope} style={{ color: "#6938EF" }} />
                        </div>
                        <div className="px-2 font-medium">Contact Us</div>
                    </button>
                </div>
                <div className="flex">
                    <div className="my-auto px-2">
                        <FontAwesomeIcon icon={faBell} style={{ color: "#6938EF" }} />
                    </div>
                    <div className="items-center space-x-2 px-4">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png"
                            alt="Profile Avatar"
                            className="w-8 h-8 rounded-full"
                        />
                    </div>
                </div>
            </div>
            {renderComponent()}
        </>
    );
};

export default Header;
