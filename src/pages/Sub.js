import React from 'react';
import './Sub.css';

class Sub extends React.Component {
    render() {
        return(
          <header className="header">
            <h1>COVID-19</h1>
            <select>
                <option>국내</option>
                <option>세계</option>
            </select>
        </header>
        );
    }
}

export default Sub;