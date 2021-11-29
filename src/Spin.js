import Spinner from 'react-bootstrap/Spinner';

import React, {Component} from 'react';

class Spin extends React.Component{
    constructor(){
        super();
        
    }
    render(){
        return(
            <Spinner animation="border" role="status">
                <span className="vistally-hidden"></span>
            </Spinner>
        )
    }
}
export default Spin;