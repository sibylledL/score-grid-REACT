import React, { Component } from 'react'
import List from './List';

class Team extends Component {

  render(){
    const renderTeam = this.props.teamname.map(team =>
      <div className="team">
             <h3>{team.name}</h3><button className="closeteam" onClick = {this.props.removeTeam} id={team.name}><img src="./close.png"/></button>
             <div className="online player">
               <h3>Add a player >></h3>
               <input type="texte" className="short" onChange={this.props.getInput} name={team.name} value={team.input} placeholder="add players..."/>
               <button type="submit" className="yellow" onClick={this.props.addPlayers} name={team.name}>ADD</button>
             </div>
             <List playersname={team.players} removePlayers={this.props.removePlayers} addPoint={this.props.addPoint} removePoint={this.props.removePoint} total={team.total} teamname={team.name}/>
      </div>
  )

  return(
    <div className="containerTeam">
    {renderTeam}
    </div>

  )

}
}


export default Team
