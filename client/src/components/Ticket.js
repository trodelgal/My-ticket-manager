import React from 'react';
import DoneSharpIcon from '@material-ui/icons/DoneSharp';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import VisibilityOffSharpIcon from '@material-ui/icons/VisibilityOffSharp';
import Label from './Label';
import Content from './Content';
import './style/Ticket.css';



function Ticket({tickets, hideTheTicket, hideTicketsList, doneThisTicket,restoreTickets}){
    //NUMBER OF THE TICKETS IN THE HIDE LIST
    let numberOfTicketsInHideList=0
    let restoreButton = '';
    if(hideTicketsList[0]!==undefined){
        numberOfTicketsInHideList= hideTicketsList.length
        restoreButton=<span>-<Button id="restoreHideTickets" onClick={restoreTickets}>restore</Button></span>;
    }

    
    return(
        <div className="liveTicketList">
            <h1 id="listTitle">TICKETS</h1>
            <div id="results">Showing {tickets.length} results (<span id="hideTicketsCounter">{numberOfTicketsInHideList}</span> hidden tickets {restoreButton})</div> 
                         
            {
                tickets.map((value,i)=>{  
                    if(!value.done){ 
                    return(
                        <div className="ticket" key={i}>
                            <Card>
                                <h4 className="ticketTitle">{value.title}</h4>
                                <div className="content">
                                    <Content contentValue={value.content}/>
                                </div>
                                <div className="labelsContainer">
                                    <Label labels={value.labels}/>
                                </div>
                                <span className="userEmail">By: {value.userEmail}</span>
                                <span className="date"> date: {new Date(value.creationTime).toLocaleString()}</span>
                                <button className="hideTicketButton" onClick={()=>hideTheTicket(i)}><VisibilityOffSharpIcon/></button>
                                <button className="doneButton" onClick={()=>doneThisTicket(value.id)}><DoneSharpIcon/></button>
                            </Card>
                        </div>
                        )
                    }
                })
            }
        </div>
    )
}

export default Ticket;