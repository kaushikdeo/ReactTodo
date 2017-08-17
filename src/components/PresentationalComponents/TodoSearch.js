import React from 'react';

class TodoSearch extends React.Component {
  constructor() {
    super();
    this.handleSearch = this.handleSearch.bind(this);
  }
  handleSearch() {
    this.props.todoSearch(this.searchText.value, this.isChecked.checked);
  }
  render() {
    return (
      <div>
        <input type="search" ref={(input) => {this.searchText = input}} onChange = {this.handleSearch.bind(this)}  className = "form-control" placeholder="Please Enter Your Todo To Search"/>
        <label><input onChange={this.handleSearch.bind(this)} ref={(input) => {this.isChecked=input}} type = "checkbox" />Show Completed</label>
      </div>
    );
  }
}
export default TodoSearch;
