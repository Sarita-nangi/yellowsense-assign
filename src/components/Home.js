import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
    const navigate=useNavigate();
    const jobs=()=>{
        navigate('/jobs')
    }
    const Book=()=>{
        navigate('/bookmarks')
    }

  return (
    <div className='container'>
      
    <h1>Hi Welcome To The YellowSense Technologies <br/>We Can See The All Jobs <br/> Saved Jobs In Bookmark</h1>
        <button onClick={jobs}>Jobs</button>
        <button onClick={Book}>BookMarks</button>
    </div>
  );
};

export default Home;