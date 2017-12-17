import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
//wiecej od video
import VideoDetail from './components/video_detail';

const API_KEY = ''; //API 

//Component to produce HTML

class App extends Component {
    constructor(props){
        super(props);

        this.state = { 
            videos: [],
            selectedVideo: null 
        };

        this.videoSearch('');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0]
             });
            // this.setState({ videos: videos });
        });
    }

    render(){
        return(
            <div>
                <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo}) } 
                    videos={this.state.videos} />
            </div>
        );
    }
}
//Component whitch generated HTMl and put in one the DOM    Zobaczyc jeszce
ReactDOM.render(<App />, document.querySelector('.container'));

