import React, {Component} from 'react';
import { connect} from 'react-redux';

class DvdList extends Component {
    renderList(){
        return this.props.dvds.map((dvd) => {
            return (
           <li key={dvd.title}>
               <div>
                   <ul>
                       <li>{dvd.id}</li>
                       <li>{dvd.title}</li>
                       <li>{dvd.duration}</li>
                       <button>{dvd.price}</button>
                   </ul>
               </div>
           </li>
            );
        });
    }
    render(){
        return(
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}
function mapStateToProps(state) {
    return {
        dvds: state.dvds
    }
}
export default connect(mapStateToProps)(DvdList);