import React from 'react';
import Info from './Info';

    const IPhone13Info= 'Price is 500$. Available in 2 colors';
    const IPhone13ProInfo= 'Price is 650$. Not available.'


class Page extends React.Component {

    state = {
        info: ''
    }

    setInfo = text => {
        this.setState({
            info: text
        })
    }

    clearText = () => this.setState({
        info: ''
    })

    render() {
    return (
        <div className="page">
            <Info text={this.state.info} />
            <div className="actions">
                <button className="btn" onClick={() => this.setInfo(IPhone13Info)}>
                IPhone 13
                </button>
                <button className="btn" onClick={() => this.setInfo(IPhone13ProInfo)}>
                IPhone 13 Pro
                </button>
                <button className="btn" onClick={() => this.clearText()}>
                Clear
                </button>
            </div>
        </div>
    )}
}

export default Page;