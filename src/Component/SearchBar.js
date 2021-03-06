import React from 'react';

class SearchBar extends React.Component{

    // onInputChange(event){
    //     console.log(event.target.value);
    // }
    state = {searchText :''};

    onFormSubmit=(event)=>{
        event.preventDefault();
        
        this.props.onSubmit( this.state.searchText);
    }

    render(){
        return(
        <div className="ui segment">
            <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="field">
                    <label>Image Search</label>
                    <input  type="text"
                     value = {this.state.searchText}
                     onChange={(e)=>this.setState({searchText : e.target.value})}  />
                </div>
            </form>
        </div>
        );
    }
}


export default SearchBar;