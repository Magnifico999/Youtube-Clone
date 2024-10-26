import React from 'react';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import './SearchPage.css';

function SearchPage() {
  return (
    <div className="searchPage">
    <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
    </div>
    <hr />
    <ChannelRow 
    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScRXe2s0YvgLGalBPBxnFALHraKQwImy3Y7CpaUxA&s"
    channel="El Magnifico"
    verified
    subs="100M"
    noOfVideos={400}
    description="You can find some awesome programming videos"
    />
    <hr/>

    <VideoRow 
    views="2.1M"
    subs="700k"
    description="Do you want a free youtube clone site? Check out this video"
    timestamp="1 hour ago"
    channel="El Magnifico"
    title="Let's build a Youtube Clone"
    image="https://media.istockphoto.com/id/1478692108/photo/panel-circuit-board-with-digital-processor-conceptual-background.jpg?s=612x612&w=0&k=20&c=_yMe57VKR62oYL32NspbLFMGU20fJGuzSUjG99Ndqr0="
    />
    <VideoRow 
    views="2.1M"
    subs="700k"
    description="Introduction to Programming"
    timestamp="4 hours ago"
    channel="El Magnifico"
    title="Programming tips"
    image="https://media.istockphoto.com/id/1478692108/photo/panel-circuit-board-with-digital-processor-conceptual-background.jpg?s=612x612&w=0&k=20&c=_yMe57VKR62oYL32NspbLFMGU20fJGuzSUjG99Ndqr0="
    />
    <VideoRow 
    views="2.1M"
    subs="700k"
    description="Into the verse"
    timestamp="5 minutes ago"
    channel="El Magnifico"
    title="Multiversal theorem"
    image="https://media.istockphoto.com/id/1478692108/photo/panel-circuit-board-with-digital-processor-conceptual-background.jpg?s=612x612&w=0&k=20&c=_yMe57VKR62oYL32NspbLFMGU20fJGuzSUjG99Ndqr0="
    />
    <VideoRow 
    views="2.1M"
    subs="700k"
    description="Science made real"
    timestamp="20 days ago"
    channel="El Magnifico"
    title="The rudiment of science"
    image="https://media.istockphoto.com/id/1478692108/photo/panel-circuit-board-with-digital-processor-conceptual-background.jpg?s=612x612&w=0&k=20&c=_yMe57VKR62oYL32NspbLFMGU20fJGuzSUjG99Ndqr0="
    />
    <VideoRow 
    views="2.1M"
    subs="700k"
    description="A children cartoon"
    timestamp="1 hour ago"
    channel="El Magnifico"
    title="Barbie world"
    image="https://media.istockphoto.com/id/1478692108/photo/panel-circuit-board-with-digital-processor-conceptual-background.jpg?s=612x612&w=0&k=20&c=_yMe57VKR62oYL32NspbLFMGU20fJGuzSUjG99Ndqr0="
    />
    </div>
  );
}

export default SearchPage;