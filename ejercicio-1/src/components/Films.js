import React, {Component} from 'react';
import Usersfilms from './Usersfilms';

class Films extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      descripcion: '',
      genre: ''
    };

    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleChangeTextArea = this.handleChangeTextArea.bind(this);
    this.handleChangeSelect = this.handleChangeSelect.bind(this);
  }

  handleChangeInput(event) {
    this.setState({name: event.target.value});
  }

  handleChangeTextArea(event) {
    this.setState({description: event.target.value});
  }

  handleChangeSelect(event) {
    this.setState({genre: event.target.value});
  }


  render() {
    
    return (<form className="Films" onSubmit={this.handleSubmit}>

      <label htmlFor="name">Title:</label>
      <input type="text" value={this.state.name} onChange={this.handleChangeInput} id="name"/>

      <label htmlFor="description">Description:</label>
      <textarea name="description" value={this.state.description} onChange={this.handleChangeTextArea} id="" cols="50" rows="5"></textarea>

      <label htmlFor="genre">Pick a genre:</label>
      <select className="select" name="select-genre" value={this.state.genre} onChange={this.handleChangeSelect}>
        <option value="Drama">Drama</option>
        <option value="Comedy">Comedy</option>
        <option value="childrens">Children's</option>
      </select>

      <input type="submit" value="Enviar"/>

      <Usersfilms 
        name={this.state.name} 
        description={this.state.description} 
        genre={this.state.genre}
      />

    </form>);
  }
}

export default Films;