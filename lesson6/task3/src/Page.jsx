import React from 'react';
import Info from './Info';
class Page extends React.Component {

    state = {
        info: ''
    }

    setInfo = text => {
        this.setState({
            info: text
        })
    }

    render() {
    return (
        <div className="page">
            <Info info={this.state.info} />
            <div className="actions">
                <button className="btn" onClick={() => this.setInfo('Price is 500$. Available in 2 colors')}>
                IPhone 13
                </button>
                <button className="btn" onClick={() => this.setInfo('Price is 650$. Not available.')}>
                IPhone 13 Pro
                </button>
                <button className="btn" onClick={() => this.setInfo('')}>
                Clear
                </button>
            </div>
        </div>
    )}
}

export default Page;