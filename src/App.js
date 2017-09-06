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
        <Table onRowSelection={this.handleRowSelection.bind(this)} style={{ tableLayout: 'auto', overflow: 'visible' }} fixedHeader={false} bodyStyle={{overflow: 'visible'}}>
          <TableHeader displaySelectAll ={false}>
            <TableRow>
              <TableHeaderColumn>Url</TableHeaderColumn>
              <TableHeaderColumn>Entity</TableHeaderColumn>
              <TableHeaderColumn>Keywords</TableHeaderColumn>
              <TableHeaderColumn>Type Rank</TableHeaderColumn>

              <TableHeaderColumn>Query id</TableHeaderColumn>
              <TableHeaderColumn>Query date</TableHeaderColumn>
              <TableHeaderColumn>Query device</TableHeaderColumn>
              <TableHeaderColumn>Query nb top</TableHeaderColumn>
              <TableHeaderColumn>Query country</TableHeaderColumn>
              <TableHeaderColumn>Query service</TableHeaderColumn>
              <TableHeaderColumn>Query version</TableHeaderColumn>
              <TableHeaderColumn>Query language</TableHeaderColumn>
              <TableHeaderColumn>Query localisation</TableHeaderColumn>
              <TableHeaderColumn>Query keywords</TableHeaderColumn>
              <TableHeaderColumn>Query volume</TableHeaderColumn>

              <TableHeaderColumn>Rank 2017-07-01</TableHeaderColumn>
              <TableHeaderColumn>Rank 2017-07-02</TableHeaderColumn>
              <TableHeaderColumn>Rank 2017-07-03</TableHeaderColumn>
              <TableHeaderColumn>Rank 2017-07-04</TableHeaderColumn>
              <TableHeaderColumn>Rank 2017-07-05</TableHeaderColumn>
              <TableHeaderColumn>Rank 2017-07-06</TableHeaderColumn>
              <TableHeaderColumn>Rank 2017-07-07</TableHeaderColumn>
              <TableHeaderColumn>Rank 2017-07-08</TableHeaderColumn>
              <TableHeaderColumn>Rank 2017-07-09</TableHeaderColumn>
              <TableHeaderColumn>Rank 2017-07-10</TableHeaderColumn>
              <TableHeaderColumn>Rank 2017-07-11</TableHeaderColumn>
              <TableHeaderColumn>Rank 2017-07-12</TableHeaderColumn>
              <TableHeaderColumn>Rank 2017-07-13</TableHeaderColumn>
              <TableHeaderColumn>Rank 2017-07-14</TableHeaderColumn>
              <TableHeaderColumn>Rank 2017-07-15</TableHeaderColumn>
              <TableHeaderColumn>Rank 2017-07-16</TableHeaderColumn>
              <TableHeaderColumn>Rank 2017-07-17</TableHeaderColumn>
              <TableHeaderColumn>Rank 2017-07-18</TableHeaderColumn>
              <TableHeaderColumn>Rank 2017-07-19</TableHeaderColumn>
              <TableHeaderColumn>Rank 2017-07-20</TableHeaderColumn>
              <TableHeaderColumn>Rank 2017-07-21</TableHeaderColumn>
              <TableHeaderColumn>Rank 2017-07-22</TableHeaderColumn>
              <TableHeaderColumn>Rank 2017-07-23</TableHeaderColumn>
              <TableHeaderColumn>Rank 2017-07-24</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false} showRowHover >
            {this.state.data.map((row, i) => (
                <TableRow selected={this.isSelected(0)}>
                  <TableRowColumn>{i}</TableRowColumn>
                  <TableRowColumn>{row.url}</TableRowColumn>
                  <TableRowColumn>{row.entity}</TableRowColumn>
                  <TableRowColumn>{row.keywords}</TableRowColumn>
                  <TableRowColumn>{row.type_rank}</TableRowColumn>

                  <TableRowColumn>{row.query.id}</TableRowColumn>
                  <TableRowColumn>{row.query.date}</TableRowColumn>
                  <TableRowColumn>{row.query.device}</TableRowColumn>
                  <TableRowColumn>{row.query.nb_top}</TableRowColumn>
                  <TableRowColumn>{row.query.country}</TableRowColumn>
                  <TableRowColumn>{row.query.service}</TableRowColumn>
                  <TableRowColumn>{row.query.version}</TableRowColumn>
                  <TableRowColumn>{row.query.language}</TableRowColumn>
                  <TableRowColumn>{row.query.localisation}</TableRowColumn>
                  <TableRowColumn>{row.query.keywords}</TableRowColumn>
                  <TableRowColumn>{row.query.volume}</TableRowColumn>

                  <TableRowColumn>{row.rank['2017-07-01']}</TableRowColumn>
                  <TableRowColumn>{row.rank['2017-07-02']}</TableRowColumn>
                  <TableRowColumn>{row.rank['2017-07-03']}</TableRowColumn>
                  <TableRowColumn>{row.rank['2017-07-04']}</TableRowColumn>
                  <TableRowColumn>{row.rank['2017-07-05']}</TableRowColumn>
                  <TableRowColumn>{row.rank['2017-07-06']}</TableRowColumn>
                  <TableRowColumn>{row.rank['2017-07-07']}</TableRowColumn>
                  <TableRowColumn>{row.rank['2017-07-08']}</TableRowColumn>
                  <TableRowColumn>{row.rank['2017-07-09']}</TableRowColumn>
                  <TableRowColumn>{row.rank['2017-07-10']}</TableRowColumn>
                  <TableRowColumn>{row.rank['2017-07-11']}</TableRowColumn>
                  <TableRowColumn>{row.rank['2017-07-12']}</TableRowColumn>
                  <TableRowColumn>{row.rank['2017-07-13']}</TableRowColumn>
                  <TableRowColumn>{row.rank['2017-07-14']}</TableRowColumn>
                  <TableRowColumn>{row.rank['2017-07-15']}</TableRowColumn>
                  <TableRowColumn>{row.rank['2017-07-16']}</TableRowColumn>
                  <TableRowColumn>{row.rank['2017-07-17']}</TableRowColumn>
                  <TableRowColumn>{row.rank['2017-07-18']}</TableRowColumn>
                  <TableRowColumn>{row.rank['2017-07-19']}</TableRowColumn>
                  <TableRowColumn>{row.rank['2017-07-20']}</TableRowColumn>
                  <TableRowColumn>{row.rank['2017-07-21']}</TableRowColumn>
                  <TableRowColumn>{row.rank['2017-07-22']}</TableRowColumn>
                  <TableRowColumn>{row.rank['2017-07-23']}</TableRowColumn>
                  <TableRowColumn>{row.rank['2017-07-24']}</TableRowColumn>
                </TableRow>
            ))}
          </TableBody>
        </Table>
      </MuiThemeProvider>
    );
  }
}

export default App;
