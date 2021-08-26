import React , {Component} from 'react';
import { connect } from "react-redux";

class PageNotFound extends Component {
    render(){
        return(
            <div className="center">
                <p style={{fontSize:24}}>OOPS! Page not found!</p>
                <h3 style={{color:'red' ,fontSize:36, fontWeight:'bold'}}>404</h3>
                <p style={{fontSize:24}}>Please navigate to another page!</p>
            </div>
        )
    }
}


  export default PageNotFound;