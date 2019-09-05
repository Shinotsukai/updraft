import React, { Component } from 'react'

export default class NewChecklist extends Component {
    constructor(props){
    super(props)

    this.onChangeChecklist = this.onChangeChecklist.bind(this);
    this.newItem = this.newItem.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeListName = this.onChangeListName.bind(this);
    this.onChangeListDesc = this.onChangeListDesc.bind(this);


    this.state = {
        checklist:[{item:"", checked:""}],
        ListName: "",
        ListDesc: "",
    }
}

    newItem (e) {
        if (["item", "checked" ].includes(e.target.className) ) {
            let checklist = [...this.state.checklist]
            this.state.checklist[e.target.dataset.id][e.target.className] = e.target.value
            this.setState ({ checklist }, () => console.log(this.state.checklist))
            
        } else {
            this.setState({[e.target.item]: e.target.value})
        }
        
    }


    onChangeChecklist  (e) {
        this.setState((prevState) => ({
            checklist: [...prevState.checklist, {item:"", checked:""}],
        }));
    }



    onChangeListName (e) {
        this.setState(
            {ListName:e.target.value}
        )
    }





    onChangeListDesc (e) {
        this.setState(
            {ListDesc:e.target.value}
        )
    }

    onSubmit(e) {
        e.preventDefault();
        console.log(this.state);
    }



    render() {
        
        return (
            
            <div className="modal-content">
                   <div className="card text-center">
        <h5 className="card-header mb-2">Add New Checklist</h5>
        
        <div className="mb-2">
                <form onSubmit={this.onSubmit} onChange={this.newItem}>
                    <label htmlFor="ListName">Title</label>
                    <input type="text" name="ListName" id="ListName" value={this.state.ListName} onChange={this.onChangeListName} />
                    <br />
                    <label htmlFor="ListDesc">Description</label>
                    <input type="text" name="ListDesc" id="ListDesc" value={this.state.ListDesc} onChange={this.onChangeListDesc} />
                    
                    {
                        this.state.checklist.map((val, idx) => {
                            let itemId = `item-${idx}`, checkedId = `checked-${idx}`
                            return (
                                <div key={idx}>
                                    <label htmlFor={itemId}>{`Item #${idx +1}`}</label>
                                    <input type="text" name={itemId} data-id={idx} id={idx} value={this.state.checklist[idx].item} className="item" />

                                    <label htmlFor={checkedId} >Checked</label>
                                    <input type="checkbox" name={checkedId} data-id={idx} id={checkedId} value={this.state.checklist[idx].checked} className="checked" />
                                </div>
                            )
                        })
                    }
                    <button onClick={this.onChangeChecklist} className="btn btn-primary">New item</button>
                    <input type="submit" value="submit" />
                </form>
            </div>
            </div>
            </div>
        )
    }
}
