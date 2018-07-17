import React, { Component } from 'react'

class List extends Component {


  render(){



    const renderList = this.props.playersname.map((player, i) =>
          <tr key={i}>
              <td>{player.name}</td>
              <td className="score-cell">
                <div className="score">
                  {player.score}
                </div>
                <div className="actions">
                  <button className="button" onClick={this.props.addPoint} name={this.props.teamname} value={player.name}> + </button>
                  <button className="button" onClick={this.props.removePoint} name={this.props.teamname} value={player.name}> - </button>
                </div>
                <button className="suprPlayer" onClick={this.props.removePlayers} id={this.props.teamname} value={player.name}><img className="widthimg" src="./close.png"/></button>
              </td>
          </tr>
    )


    return(
        <div>
          <table>
            <tr>
              <th> NAME </th>
              <th> SCORE </th>
            </tr>
              {renderList}
            <tr>
                <td>TOTAL</td>
                <td className="center">{this.props.total}</td>
            </tr>
          </table>
        </div>
    )}

  }


export default  List
