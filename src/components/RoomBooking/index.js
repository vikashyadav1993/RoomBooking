import {Component} from 'react';
import './index.css'


import {FaBed,FaChild} from 'react-icons/fa';
import{CgProfile} from 'react-icons/cg';
import {AiOutlineMinusCircle,AiOutlinePlusCircle} from 'react-icons/ai';


class RoomBooking extends Component{
    state={
        rooms:1,
        adults:1,
        children:0,
    }

    checkTotalPeople=()=>{
        const{rooms,adults,children}=this.state
        const totalPeople=adults+children;
        const requiredPeople=(rooms)*4;
        if(totalPeople>requiredPeople){
          const removePeople=totalPeople-requiredPeople;
          if(children>=removePeople){
              const NoofChildren=children-removePeople;
              this.setState({children:NoofChildren});
          }
          else{
              const noofChildren=removePeople-children;
             // const removeAdults=removePeople-noofChildren;
              const noofAdults=adults-noofChildren;
              this.setState({children:0,adults:noofAdults});
          }
        }
    }

    checkAdults=()=>{
        const {adults,rooms}=this.state;
        if(rooms>adults){
            this.setState({adults:rooms})
        }

    }


    decrementRooms=()=>{
        if(this.state.rooms>1){
            this.setState(prevState=>({rooms:prevState.rooms-1}),()=>{this.checkTotalPeople()});
        }
    }

    incrementRooms=()=>{
        if(this.state.rooms<=4){
            this.setState(prevState=>({rooms:prevState.rooms+1}),()=>{this.checkAdults()});
        }
    }

    checkRooms=()=>{
        const{rooms,adults,children}=this.state;
        const totalPeople=adults+children;
        const totalSpace=rooms*4;
        if(totalSpace<totalPeople){
            this.setState(prevState=>({rooms:prevState.rooms+1}),()=>{const{adults,rooms}=this.state;if(rooms>adults){
                this.setState({adults:rooms});
            }})
        }
        else{
            const remaingSpace=totalSpace-totalPeople;
            if(remaingSpace===4){
                this.setState(prevState=>({rooms:prevState.rooms-1}),()=>{const{adults,rooms}=this.state;  if(rooms>adults){
                    this.setState({adults:rooms});
                }})
            }
        }
        
    }

    decrementAdults=()=>{
        if(this.state.adults>1){
            this.setState(prevState=>({adults:prevState.adults-1}),()=>{this.checkRooms()});
        }
    }

    incrementAdults=()=>{
        const{rooms,adults,children}=this.state;
        if(rooms<5 || (adults+children)<20 ){
            this.setState(prevState=>({adults:prevState.adults+1}),()=>{this.checkRooms()});
        }
        
    }

    decrementChildren=()=>{
        if(this.state.children>=1){
            this.setState(prevState=>({children:prevState.children-1}),()=>{this.checkRooms()})
        }
        
    }

    incrementChildren=()=>{
        const {children,adults,rooms}=this.state;
        if( (adults+children)<20 || rooms<5){
            this.setState(prevState=>({children:prevState.children+1}),()=>{this.checkRooms()})
        }
        
    }

    render(){
        const {rooms,adults}=this.state;
        const isRoomDecrement=rooms===1;
        const isAdultsDecrement=adults===1;
     return(<div className="roombooking-container">
         
         <div className="rooms-container">
        <div><FaBed/><span>Rooms</span></div>
        <div><button className="minus-button" onClick={this.decrementRooms} disabled={isRoomDecrement} data-test="decrementRooms"><AiOutlineMinusCircle/></button>{this.state.rooms}
        <button className="plus-button" onClick={this.incrementRooms} data-test="incrementRooms"><AiOutlinePlusCircle/></button></div>
         </div>
         <hr />
         <div className="adults-container">
        <div><CgProfile/><span>Adults</span></div>
        <div><button className="minus-button" onClick={this.decrementAdults} disabled={isAdultsDecrement}><AiOutlineMinusCircle/></button>{this.state.adults}
        <button className="plus-button" onClick={this.incrementAdults}><AiOutlinePlusCircle/></button></div>
         </div>
         <hr />
         <div className="children-container">
        <div><FaChild/><span>Child</span></div>
        <div><button className="minus-button" onClick={this.decrementChildren}><AiOutlineMinusCircle/></button>{this.state.children}
        <button className="plus-button" onClick={this.incrementChildren}><AiOutlinePlusCircle/></button></div>
         </div>
     </div>)
    }
}

export default RoomBooking;