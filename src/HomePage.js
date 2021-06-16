import React from "react";
import ColoredLine from "./ColoredLine";


class HomePage extends React.Component {
    constructor(props) {
        super(props);
        //set initial state to false(Help on button will be displayed)
        this.state = {isHelpClicked: false};

        this.handleClick = this.handleClick.bind(this);
    }


    //handle click event
    handleClick() {
        this.setState(prevState => ({
            isHelpClicked: !prevState.isHelpClicked
        }));
    }


     //Home page content
    // when button is clicked on,display hangman rules
    render() {
        return (
            <div className="App">
                <h1><b>Welcome to my Hangman game!</b></h1>
                <h3>Click start when you are ready</h3>

                <img src="hangman.png" alt="Image of Hang Man"/>
                <p></p>
                <ColoredLine color="black"/>
                <p></p>
                <p></p>
                <button type="button" className="button" onClick={this.handleClick}> {this.state.isHelpClicked ?
                    'The game picks a random\n' +
                    'word, which the user must then attempt to guess letter-by-letter. Too many\n' +
                    'incorrect guesses result in loss of the game.The process of losing is\n' +
                    'depicted by your character being hanged.If the character being hanged is fully drawn then you lose.'
                    : 'Help'}</button>
            </div>
        );
    }
}


export default HomePage;
