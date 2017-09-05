import React, { Component } from 'react';
import logo from './logo.svg';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      selected: [1]
    }
  }

  componentDidMount() {
    return fetch('https://account.monitorank.com/api.php?key=2201-sBD0Lh4gzaCO0cpYpllA2CcWXBlNmy8FZBwAJqH8&module=entity&action=get&id_entity=17631&period=20170701-20170724')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({data: responseJson.data})
    })
    .catch((error) => {
      console.error(error);
    });
  }

  isSelected(index) {
    return this.state.selected.indexOf(index) !== -1;
  }

  handleRowSelection(selectedRow) {
    let selectedUser = this.state.data[selectedRow];
    window.location = selectedUser.url
    console.log(selectedUser)
    // browserHistory.push(`/usuario_privilegio?userId=${selectedUser.id}`);
  }

  render() {
    console.log(this.state.data)
    return (
      <MuiThemeProvider>
        <Table onRowSelection={this.handleRowSelection.bind(this)}>
          <TableHeader displaySelectAll ={false}>
            <TableRow>
              <TableHeaderColumn>Entity</TableHeaderColumn>
              <TableHeaderColumn>Keywords</TableHeaderColumn>
              <TableHeaderColumn>Type Rank</TableHeaderColumn>
              <TableHeaderColumn>URL</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false} showRowHover >
            {this.state.data.map((row) => (
                <TableRow selected={this.isSelected(0)}>
                  <TableRowColumn>{row.entity}</TableRowColumn>
                  <TableRowColumn>{row.keywords}</TableRowColumn>
                  <TableRowColumn>{row.type_rank}</TableRowColumn>
                  <TableRowColumn>{row.url}</TableRowColumn>
                </TableRow>
            ))}
          </TableBody>
        </Table>
      </MuiThemeProvider>
    );
  }
}

export default App;
