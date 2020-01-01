import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash'
import {Link} from 'react-router-dom'

import { readEvents } from '../actions'

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button'


class EventsIndex   extends Component{

  componentDidMount()
  {
      this.props.readEvents();
  }

 renderEvents(){
  return _.map(this.props.events,event=>(
    <TableRow key={event.id}>
      <TableCell>{event.id}</TableCell>
      <TableCell>
        <Link to={`/events/${event.id}`}>{event.title}</Link>
      </TableCell>
      <TableCell>{event.body}</TableCell>
    </TableRow>
  ))
  }

  render(){
    return (
      <React.Fragment>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Body</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.renderEvents()}
            </TableBody>
          </Table>
        </TableContainer>
        <Button component={Link} to="/events/new" >New</Button>
      </React.Fragment>
    )
  }   
}

const classes = makeStyles({
  table: {
    minWidth: 650,
  },
});


const mapStateToProps = state => ({events: state.events})

const mapDispatchProps =  ({ readEvents });

export default connect(mapStateToProps, mapDispatchProps)(EventsIndex);

