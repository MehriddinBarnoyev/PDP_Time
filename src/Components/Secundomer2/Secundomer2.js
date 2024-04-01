import { Component } from "react";
import './Secundomer2.css'

class Secundomer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            second: props.second || 0,
            minute: props.minute || 0,
            hour: props.hour || 0,
            soniya: props.soniya || 0,
        };

        console.log("Secundomer js constructor ishladi");
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState((state) => {
                let newSecond = state.second + 1;
                let newMinute = state.minute;
                let newHour = state.hour;

                if (newSecond === 60) {
                    newSecond = 0;
                    newMinute++;
                }
                if (newMinute === 60) {
                    newMinute = 0;
                    newHour++;
                }
                if (newHour === 24) {
                    newHour = 0;
                }

                return {
                    second: newSecond,
                    minute: newMinute,
                    hour: newHour,
                    soniya: state.soniya + 1
                };
            });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    getNormalTime = (n) => (n < 10 ? "0" + n : n);

    render() {
        console.log("Secundomer js render ishladi");
        return (
            <h1 className="display-1 fw-bold">
                {this.getNormalTime(this.state.hour)}:
                {this.getNormalTime(this.state.minute)}:
                {this.getNormalTime(this.state.second)}
            </h1>
        );
    }
}

export default Secundomer;
