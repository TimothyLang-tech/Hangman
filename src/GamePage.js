import React from 'react';
import ColoredLine from "./ColoredLine";


class GamePage extends React.Component {
        constructor(props) {
                super(props);


                //Displays a random word in the array for the user to guess
                let words = ["VETERAN", "PROJECT","FACTORY","READING","VIRTUAL","STRANGE",
                        "LEARNED","SOCIETY","UNIFORM","NETWORK","NETFLIX","STORAGE","MACHINE","MISTAKE","KINGDOM","NERVOUS","STUMBLE",];
                let randomWord = words[Math.floor(Math.random() * words.length)];


                this.state = {
                        hiddenWord: "_______",
                        word: randomWord,
                        letter: "",
                        lives: 10,
                        img: <img src="state1.png" alt={"No errors yet"} />,
                        amountCorrect: 0
                };
        }


        handleChooseLetter = e => {
                const usedWord = [...this.state.word];
                const chosenLetter = e.target.value.toLocaleUpperCase();
                let letterPosition = usedWord.indexOf(chosenLetter);
                let incrementAmountCorrect = (this.state.amountCorrect + 1);


                //insert letter to hidden word on same index if letter on index exists
                if (letterPosition > -1) {
                        this.setState(prevState => {
                                const hiddenWord = [...prevState.hiddenWord];
                                for (let i = 0; i < usedWord.length; i++) {
                                        if (usedWord[i] === chosenLetter) {
                                                hiddenWord[i] = chosenLetter;
                                                //Add 1 amount correct if right letter is guessed.
                                                //correct word results in win.
                                                this.setState({amountCorrect : incrementAmountCorrect})
                                                if(this.state.amountCorrect === 6){
                                                        alert("You won!")
                                                }
                                        }
                                }
                                return { hiddenWord, letter: "" };
                        });
                        return;
                }
                this.setState({ letter: "" });


                let reduceLives = (this.state.lives -1);


                //Reduce live by 1 if word does not contain inputted letter
                if (this.state.letter !== this.state.hiddenWord){
                        this.setState({ lives: reduceLives })
                }


                //Update hangman img based on amount lives left
                if(reduceLives === 9){
                        this.setState({ img: <img src="state2.png" alt="1 error" />});
                }
                else if(reduceLives === 8){
                        this.setState({ img: <img src="state3.png" alt="2 errors"/>});
                }
                else if(reduceLives === 7){
                        this.setState({ img: <img src="state4.png" alt="3 errors"/>});
                }
                else if(reduceLives === 6){
                        this.setState({ img: <img src="state5.png" alt="4 errors" />});
                }
                else if(reduceLives === 5){
                        this.setState({ img: <img src="state6.png" alt="5 errors" />});
                }
                else if(reduceLives === 4){
                        this.setState({ img: <img src="state7.png" alt="6 errors" />});
                }
                else if(reduceLives === 3){
                        this.setState({ img: <img src="state8.png" alt="7 errors" />});
                }
                else if(reduceLives === 2){
                        this.setState({ img: <img src="state9.png" alt="8 errors" />});
                }
                else if(reduceLives === 1){
                        this.setState({ img: <img src="state10.png" alt="9 errors" />});
                }
                else {
                        this.setState({ img: <img src="state11.png" alt="10 errors (Lost)" />});
                }


                //If you reach 0 health , the program will notify that you lose
                if(this.state.lives === 1){
                        this.setState({ lives: "None" })
                        alert("You Lose!")
                }
        };


        //Reset states to default if restart button is clicked
        handleRestart() {
                this.setState({ hiddenWord: "_______"})
              //  this.setState({ word:  })
                this.setState({  letter: ""})
                this.setState({  lives: 10})
                this.setState({img: <img src="state1.png" alt={"No errors yet"} />})
                this.setState({amountCorrect: 0})
        }


        //render GamePage content
        render() {
                const {hiddenWord} = this.state;
                const {letter} = this.state;
                return (
                    <div className="App">
                            <h1>Good luck!</h1>
                            <p></p>
                            {[...hiddenWord].map((letter, index) => (
                                <span key={index}>{letter}</span>
                            ))}
                            <input placeholder={"Enter any letter here"} onChange={this.handleChooseLetter} value={letter} />
                            <p></p>
                            <ColoredLine />
                            {this.state.img}
                            <p></p>
                            <b>Lives: {this.state.lives}</b>
                            <p></p>
                            <b>Correct {this.state.amountCorrect}</b>
                            <p></p>

                            <button onClick={() => this.handleRestart()}>
                                    Restart
                            </button>

                    </div>
                );
        }
}


export default GamePage;