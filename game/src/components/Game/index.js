import React, { Component } from 'react';
import Nav from '../Nav';
import ImgCard from '../ImgCard';


import data from '../../data.json';
class Game extends Component {
    state = {
        data,
        score: 0,
        topScore: 0,
        clickedImg: []
    }
    componentDidMount(){
        this.setState({
            data: this.shuffleData(this.state.data)
        })
    }
    shuffleData = (data) => {
        console.log("shuffle data")
        let i= data.length -1;
        while(i>0){
            const randomNumber = Math.floor(Math.random() *(i+1));
            const temp = data[i];
            data[i] = data[randomNumber];
            data[randomNumber] = temp;
            i--
        }
        return data;
    }
    handleImageClick =(id) => {
        if(this.state.clickedImg.includes(id)){
            this.setState({
                score: 0,
                clickedImg: []
            })
        }
        else{
            var newScore = this.state.score +1;
            var newTopScore = Math.max(newScore, this.state.topScore)
            this.setState({
                clickedImg: this.state.clickedImg.concat(id),
                topScore: newTopScore,
                score: newScore
            })
        }
        this.shuffleData(this.state.data);
    }
    render() {
        return (
            <div>
               <Nav score={this.state.score} topScore={this.state.topScore}/>
                
                {this.state.data.map(data => (
                    <ImgCard 
                        key={data.id}
                        id={data.id}
                        image={data.image}
                        handleClick ={this.handleImageClick}
                    />
                ))}
            
            </div>
        );
    }
}

export default Game;