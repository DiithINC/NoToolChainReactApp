
const cornerLT_style = {
    background: "rgb(61, 150, 240)",
    padding: "40px",
    height: "40px",
}

const logo_style = {
    position: "fixed",
    top: "0",
    paddingLeft: "35px",
    paddingTop: "25px",
    height: "80px",
    width: "80px"
}

function CornerLT() {
    return (
        React.createElement(
            "div",
            { style: cornerLT_style },
            React.createElement(
                "img", 
                {   
                    src: "./img/kkL1.png",
                    style: logo_style
                }, 
                null,
            ),
        )
    )
}

export default CornerLT;