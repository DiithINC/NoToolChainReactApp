import MenuButton from "./menu_button.js"
import CornerLT from "./corner.js"

const SideMenu_style = {
    background: "black",
    height: "100%",
    width: "250px",
    position: "fixed",
    zIndex: "1",
    top: "0",
    left: "0",
    backgroundColor: "#111",
    overflowX: "hidden",
    transition: "0.5s",
}

function SideMenu () {
    return (
        React.createElement(
            "div",
            {style: SideMenu_style},
            React.createElement(CornerLT, null),
            React.createElement(MenuButton, { text: "About", isTopButton: 1 }),
            React.createElement(MenuButton, { text: "Gallery" }),
            React.createElement(MenuButton, { text: "Accout" }),
            React.createElement(MenuButton, { text: "Settings" }),
            React.createElement(MenuButton, null)
        )
    )
}

export default SideMenu;