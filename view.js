import SideMenu from "./side_menu.js";

const topBar_style = {
    background: "black",
    mriginLeft: "400px",
    position: "fixed",
    height: "120px",
    width: "100%",
    color: "white",
}

class TopBar extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            React.createElement(
                "div",
                { style: topBar_style },
                React.createElement(
                    "h1",
                    null,
                    "Test"
                )
            )
        )
    }
}

function View() {
    return (
        React.createElement(
            "div",
            null,
            React.createElement(SideMenu, null),
            React.createElement(TopBar, null)
        )
    )
}


export default View;