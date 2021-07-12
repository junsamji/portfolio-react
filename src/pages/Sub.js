import React from 'react';
import './Sub.css';
import Covid from '../components/Covid';

class Sub extends React.Component {
    state = { 
      country : "KOR", 
    };   

    handleClick = () => {
      setTimeout(this.showMessage, 3000);
    };

    showMessage = () => {
      alert('flolowed ' + this.state.country);
    };

    render() {
        return(
        <div>
          <header className="header">
            <h1>COVID-19</h1>
            <select value={ this.state.country } onChange={e => this.setState({ country: e.target.value })}>
                <option value="KOR">국내</option>
                <option value="WORLD">해외</option>
            </select>
          </header>
          <div>
          {
            this.state.country === "KOR" ? <Covid /> : <p>현재는 국내만 확인 가능합니다.</p>
          }
          </div>
        </div>
        );
    }
}

export default Sub;