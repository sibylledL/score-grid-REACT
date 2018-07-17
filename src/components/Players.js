import React, { Component } from 'react';
import List from './List';
import Team from './Team';

class Players extends Component {
      state = {
        inputTeam:"",
        team:[
               //
               //  { input:"",
               //    name:"equipe1",
               //    players:[
               //      {name:"Fred", score:0},
               //      {name:"Sibylle", score:3}
               //    ],
               //    total:0
               // },
               //
               // {  input:"",
               //    name:"equipe2",
               //    players:[
               //      {name:"Fred", score:2},
               //      {name:"Sibylle", score:0}
               //    ],
               //    total:0
               //  }
            ]
      }

      //ADD_NEW_TEAM
      getTeamname = (event)=>{
          this.setState({inputTeam:event.target.value});
          console.log(this.state.inputTeam)
      }

      createTeam = (event) => {
        if(this.state.inputTeam !==""){
          // let list = this.state.team;
          // let stateCopy = Object.assign({}, this.state)
          // stateCopy.inputTeam="";
          // stateCopy.team.unshift({
          //   input:"",
          //   name:this.state.inputTeam,
          //   players:[],
          //   total:0
          // })

          this.setState({
          // stateCopy
          inputTeam:"",
          team:[...this.state.team,
            {input:"",
            name:this.state.inputTeam,
            players:[],
            total:0
            }
          ]
          })
        }
      }

      // team:[...this.state.team.slice(0,indexTeam),
      //   {input:"",
      //   ...this.state.team[indexTeam],
      //   players:[...this.state.team[indexTeam].players, {name:this.state.team[indexTeam].input, score:0}]
      // },...this.state.team.slice(indexTeam+1)
      // ]
      //Remove_Team

      removeTeam = (event) => {
        let teamArray = this.state.team;
        let currentTeam = event.currentTarget.id;
        console.log(currentTeam);
        let indexTeam = teamArray.findIndex(x => x.name===currentTeam);
        console.log(indexTeam);
        this.setState({
          team:[
            ...this.state.team.slice(0,indexTeam),
            ...this.state.team.slice(indexTeam+1)
                ]
        })
      }

      //ADD_PLAYERS TO TEAM
      getInput = (event) => {
        let currentTeam = event.target.name;
        console.log(event.target.value);
        let teamArray = this.state.team;
        let indexTeam = teamArray.findIndex(x => x.name===currentTeam);
        this.setState({
          team:[...this.state.team.slice(0,indexTeam),
              {...this.state.team[indexTeam], input: event.target.value}
          ,...this.state.team.slice(indexTeam+1)]
        });
      }


      addPlayers = (event) => {
        let currentTeam = event.target.name;
        let teamArray = this.state.team;

        let indexTeam = teamArray.findIndex(x => x.name===currentTeam);
        if(this.state.team[indexTeam].input !==""){
          this.setState({
            team:[...this.state.team.slice(0,indexTeam),
              {
               ...this.state.team[indexTeam],
              input:"",
              players:[...this.state.team[indexTeam].players, {name:this.state.team[indexTeam].input, score:0}]
            },...this.state.team.slice(indexTeam+1)
            ]
          })
        };

      };

      //remove_players
      removePlayers= (event) => {
        let currentPlayer = event.currentTarget.value;
        let currentTeam = event.currentTarget.id;

        let teamArray = this.state.team;
        console.log(currentTeam);
        console.log(currentPlayer);
        let indexthisTeam = teamArray.findIndex(x => x.name===currentTeam);
        console.log(indexthisTeam);
        let playersofthisTeam = this.state.team[indexthisTeam].players
        console.log(playersofthisTeam);
        let index = playersofthisTeam.findIndex(x => x.name===currentPlayer);
        console.log(index);


        this.setState({
          team:[...this.state.team.slice(0,indexthisTeam),{
            ...this.state.team[indexthisTeam],
            players:[...this.state.team[indexthisTeam].players.slice(0,index),
            ...this.state.team[indexthisTeam].players.slice(index+1)
          ],
          total:this.state.team[indexthisTeam].total-this.state.team[indexthisTeam].players[index].score
          },...this.state.team.slice(indexthisTeam+1)]

        })

      }
      //SCORES_ACTION
      addPoint = (event) => {
          event.preventDefault();
          let currentTeam= event.target.name;
          let currentPlayer = event.target.value;


          let teamArray = this.state.team;


          let indexthisTeam = teamArray.findIndex(x => x.name===currentTeam);

          let playersofthisTeam = this.state.team[indexthisTeam].players

          let index = playersofthisTeam.findIndex(x => x.name===currentPlayer);


          let score = playersofthisTeam[index].score;

          score++


          let stateCopy = Object.assign({}, this.state);
          stateCopy.team[indexthisTeam].players[index].score += 1;
          stateCopy.team[indexthisTeam].total +=1;

          this.setState(stateCopy
          );
    };



      removePoint = (event)=>{
        event.preventDefault();
        let currentTeam= event.target.name;
        let currentPlayer = event.target.value;

        let teamArray = this.state.team;



        let indexthisTeam = teamArray.findIndex(x => x.name===currentTeam);

        let playersofthisTeam = this.state.team[indexthisTeam].players

        let index = playersofthisTeam.findIndex(x => x.name===currentPlayer);

        let score = playersofthisTeam[index].score;
        score--

        let stateCopy = Object.assign({}, this.state);
        stateCopy.team[indexthisTeam].players[index].score -= 1;
        stateCopy.team[indexthisTeam].total -=1;

        this.setState({
        stateCopy
        })

      }
      render() {
      return (
        <div>

            <div className="createTeam">
                <h2>Create your team and play !  >>>  </h2>
                <div className="online">
                    <input className="large padding-left" type="text" name="team" onChange={this.getTeamname} placeholder="Name of your team..." value={this.state.inputTeam}/>
                    <button className="large" type="submit" onClick={this.createTeam}>Create Team</button>
                </div>
            </div>


            <Team getInput={this.getInput} addPlayers={this.addPlayers} removePlayers={this.removePlayers} teamname={this.state.team} removeTeam={this.removeTeam} addPoint={this.addPoint} removePoint={this.removePoint} total={this.state.team.total}/>



        </div>

      )}

}

export default Players
