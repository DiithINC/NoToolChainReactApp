 
class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: props.count || 0
    };

    this.updateCount = this.updateCount.bind(this);
  }

  updateCount(increment) {
    const { count } = this.state;

    this.setState({
        count: count + increment
      });

  }

  render() {
    const { count } = this.state;

    return React.createElement(
      "div",
      null,
      React.createElement("p", null, "The current count (app2.1) is ", count),
      React.createElement(
        "button",
        {
          type: "button",
          onClick: () => {
            return this.updateCount(1)
          }
        },
        "Increment"
      ),
      React.createElement(
        "button",
        {
          type: "button",
          onClick: () => {
            return this.updateCount(-1)
          }
        },
        "Decrement"
      ),
    );
  }
}



export default Counter;