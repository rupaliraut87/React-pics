import React from 'react';
import unsplash from '../api/unsplash';
import ImageList from './ImageList';
import SearchBar from './SearchBar';

class App extends React.Component{
    state = { images: [] };

     onSearchSubmit = async (searchText) =>{
        const response = await unsplash.get('/search/photos',{
            params: {query: searchText },
        });

        this.setState({images: response.data.results});
}

    render() {
        return(
        <div className="ui container" style={{marginTop: '10px'}} >
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images}></ImageList>
        </div>
        );
    }
};


export default App;
