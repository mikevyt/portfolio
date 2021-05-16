import React, { Component } from 'react';
import './AnimatedName.scss';

const POSITIONS = ['Full Stack Developer', 'Machine Learning Enthusiast'];

class AnimatedName extends Component {
    state = {
        position: 0,
        timer: 0,
    };

    componentDidMount() {
        const timer = setInterval(this.togglePosition, 6000);
        this.setState({ timer: timer });
    }

    componentWillUnmount() {
        clearInterval(this.state.timer);
    }

    togglePosition = () => {
        const position = this.state.position ? 0 : 1;
        const element = document.querySelector('.position-text');
        if (element) {
            element.classList.remove('fadeIn');
            setTimeout(() => {
                this.setState({ position: position });
                element.classList.add('fadeIn');
            }, 100);
        }
    };

    render() {
        const { position } = this.state;

        return (
            <div>
                <div className="name-text">Dennis Vytlingam</div>
                <div className="position-text animated">
                    {POSITIONS[position]}
                </div>
            </div>
        );
    }
}

export default AnimatedName;
