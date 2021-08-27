
const menuButton_style = {
    padding: "8px 8px 8px 32px",
    textDecoration: "none",
    fontSize: "25px",
    color: "#818181",
    display: "block",
    transition: "0.3s",
} 

const topButton_style = {
    padding: "32px 8px 8px 32px",
    textDecoration: "none",
    fontSize: "25px",
    color: "#818181",
    display: "block",
    transition: "0.3s",
} 


class MenuButton extends React.Component {
    constructor(props) {
        super(props);
  
      this.state = {
        isTopButton: props.isTopButton || 0,
        text: props.text,
        buttonStyle: menuButton_style
      };

      if(props.text) {
        console.log("Button name: " + props.text)
      }
      else {
        console.log("Button name err: null");
        this.state.text = "#Change Me!";
      }

      if(props.isTopButton) {
        this.state.buttonStyle = topButton_style;
      }
      
    }

    render () {
        const { buttonStyle } = this.state;
        const { text } = this.state;

        return (
            React.createElement(
                "a",
                { style: buttonStyle,
                  href: "#"},
                text,
            )
        )
    }
}

export default MenuButton;

/* As a function */
/*
function MenuButton(props) {
    return (
        React.createElement(
            "a",
            { style: menuButton_style,
              href: "#"},
            props.text,
        )
    )
}
*/