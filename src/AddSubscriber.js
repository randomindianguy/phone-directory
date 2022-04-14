import React, {Component} from 'react';
import Header from './Header';
import './AddSubscriber.css';

class AddSubscriber extends Component {
    constructor(){
        super();
        this.state = {
            id: 0,
            name: '',
            phone: ''
        }
        console.log(this.state);
    }

inputChangedHandler = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
    console.log(this.state);
}

    render() {
        return (
            <div>
                <Header heading="Add Subscriber"/>
                <div className='component-body-container'>
                    <button className='custom-btn'>Back</button>
                    <form className='subscriber-form'>
                        <label htmlFor='name' className='label-control'>Name</label><br />
                        <input id='name' type="text"className='input-control' name='name' onChange={this.inputChangedHandler} /><br /><br />
                        <label htmlFor='phone' className='label-control'>Phone</label><br />
                        <input id='phone' type="text"className='input-control' name='phone' onChange={this.inputChangedHandler}/><br /><br />
                        <div className='subscriber-info-container'>
                            <span className='subscriber-to-add-heading'>Subscriber To Be Added: </span> <br />
                            <span className='subscriber-info'>Name: </span> <br />
                            <span className='subscriber-info'>Phone: </span>
                        </div>
                        <button type="submit" className='custom-btn add-btn'>Add</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddSubscriber