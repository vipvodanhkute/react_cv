import React, { Component } from 'react';
class Unit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            out: ''
        }
    }
    onClick() {
        var result = this.props.onClick(this.refs.input.value);
        this.setState({ out: result });
    }
    render() {
        return (
            <div id={this.props.number} className="row">
                <div>
                    {this.props.title}
                </div>
                <div className="col-6">
                    <div className="form-group">
                        <textarea  className="form-control" ref="input" cols={30} rows={10} />
                    </div>
                    <button onClick={this.onClick.bind(this)} className="btn btn-primary">Submit</button>
                </div>
                <div className="col-6">
                    <div className="form-group">
                        <textarea readOnly value={this.state.out} className="form-control"  cols={30} rows={10}/>
                    </div>
                </div>
            </div>

        );
    }
}

export default Unit;

