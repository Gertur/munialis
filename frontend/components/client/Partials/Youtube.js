import React,{Component} from 'react';
import axios from 'axios';
export default class Youtube extends Component{
    
    async componentDidMount(){
     this.loadsVideos();
    
    }
    
    async loadsVideos(){
    var key="AIzaSyC3Wn3l_CTFv7zCUVpRs1N9vqrA7AKJEQ8";
    var playlistId="PL2fnLUTsNyq7A335zB_RpOzu7hEUcSJbB";
    var URL="https://www.googleapis.com/youtube/v3/playlistItems";
    
    var options = {
        part: 'snippet',
        key: key,
        maxResults: 2,
        playlistId: playlistId
    }
       $.getJSON(URL, options, function (data) {
           console.log(data);
       })
  
        
    }
    render(){     
        return(
            <div>
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/KojVv8wwPlo" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                </iframe>
                <article id="video-container">
                    
                </article>
            </div>
        )
    }
}