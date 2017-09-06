import React, { Component } from 'react';
import logo from './logo.svg';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ReactTable from "react-table";
import "react-table/react-table.css";

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
      let sorted = responseJson.data.sort((a, b) => {
          return a.query.id - b.query.id;
      });
      this.setState({data: sorted})
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
    const columns = [{
      Header: 'Query',
      columns: [{
          Header: "Keywords",
          id: 'qkeywords',
          accessor: d => d.query.keywords
        },
        {
          Header: "Date",
          id: 'qdate',
          accessor: d => d.query.date,
        },
        {
          Header: "Device",
          id: 'qdevice',
          accessor: d => d.query.device,
        },
        {
          Header: "Localisation",
          id: 'qlocalisation',
          accessor: d => d.query.localisation,
        },
        {
          Header: "Volume",
          id: 'qvolume',
          accessor: d => d.query.volume,
      }]
    },
    {
      Header: 'General',
      columns: [{
        Header: "URL",
        accessor: "url",
      },
      {
        Header: "Type rank",
        accessor: "type_rank",
      }]
    },
    {
      Header: 'Rank',
      columns: [{
        Header: "2017-07-01",
        id: 'r1',
        accessor: d => d.rank['2017-07-01'],
      },
      {
        Header: "2017-07-02",
        id: 'r2',
        accessor: d => d.rank['2017-07-02'],
      },
      {
        Header: "2017-07-03",
        id: 'r3',
        accessor: d => d.rank['2017-07-03'],
      },
      {
        Header: "2017-07-04",
        id: 'r4',
        accessor: d => d.rank['2017-07-04'],
      },
      {
        Header: "2017-07-05",
        id: 'r5',
        accessor: d => d.rank['2017-07-05'],
      },
      {
        Header: "2017-07-06",
        id: 'r6',
        accessor: d => d.rank['2017-07-06'],
      },
      {
        Header: "2017-07-07",
        id: 'r7',
        accessor: d => d.rank['2017-07-07'],
      },
      {
        Header: "2017-07-08",
        id: 'r8',
        accessor: d => d.rank['2017-07-08'],
      },
      {
        Header: "2017-07-09",
        id: 'r9',
        accessor: d => d.rank['2017-07-09'],
      },
      {
        Header: "2017-07-10",
        id: 'r10',
        accessor: d => d.rank['2017-07-10'],
      },
      {
        Header: "2017-07-11",
        id: 'r11',
        accessor: d => d.rank['2017-07-11'],
      },
      {
        Header: "2017-07-12",
        id: 'r12',
        accessor: d => d.rank['2017-07-12'],
      },
      {
        Header: "2017-07-13",
        id: 'r13',
        accessor: d => d.rank['2017-07-13'],
      },
      {
        Header: "2017-07-14",
        id: 'r14',
        accessor: d => d.rank['2017-07-14'],
      },
      {
        Header: "2017-07-15",
        id: 'r15',
        accessor: d => d.rank['2017-07-15'],
      },
      {
        Header: "2017-07-16",
        id: 'r16',
        accessor: d => d.rank['2017-07-16'],
      },
      {
        Header: "2017-07-17",
        id: 'r17',
        accessor: d => d.rank['2017-07-17'],
      },
      {
        Header: "2017-07-18",
        id: 'r18',
        accessor: d => d.rank['2017-07-18'],
      },
      {
        Header: "2017-07-19",
        id: 'r19',
        accessor: d => d.rank['2017-07-19'],
      },
      {
        Header: "2017-07-20",
        id: 'r20',
        accessor: d => d.rank['2017-07-20'],
      },
      {
        Header: "2017-07-21",
        id: 'r21',
        accessor: d => d.rank['2017-07-21'],
      },
      {
        Header: "2017-07-22",
        id: 'r22',
        accessor: d => d.rank['2017-07-22'],
      },
      {
        Header: "2017-07-23",
        id: 'r23',
        accessor: d => d.rank['2017-07-23'],
      },
      {
        Header: "2017-07-24",
        id: 'r24',
        accessor: d => d.rank['2017-07-24'],
      }]
    }]
    return (
      <div>
          <ReactTable
            data={this.state.data}
            filterable
            columns={columns}
            className="-striped -highlight"
            style={{overflow: 'visible'}}
            getTdProps={(state, rowInfo, column, instance) => {
              return {
                onClick: (e, handleOriginal) => {
                  console.log('A Td Element was clicked!')
                  console.log('it produced this event:', e)
                  console.log('It was in this column:', column)
                  console.log('It was in this row:', rowInfo)
                  console.log('It was in this table instance:', instance)
                  window.location = rowInfo.original.url
                  // IMPORTANT! React-Table uses onClick internally to trigger
                  // events like expanding SubComponents and pivots.
                  // By default a custom 'onClick' handler will override this functionality.
                  // If you want to fire the original onClick handler, call the
                  // 'handleOriginal' function.
                  if (handleOriginal) {
                    handleOriginal()
                  }
                }
              }
            }}
          />
        </div>
    );
  }
}

export default App;
