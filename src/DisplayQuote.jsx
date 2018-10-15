import  React, {Component}  from  'react';


export default class DisplayQuotes extends Component {
    render(){
    return (
        <div>
            <img  src={this.props.quote.image}  alt="picture"  />
            <ul>
                <li className="quotesimpson">{this.props.quote.quote}</li>
                <li>
                    {this.props.quote.character}
                </li>
            </ul>
        </div>
    );
};
}
