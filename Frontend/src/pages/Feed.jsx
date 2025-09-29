import React, { useEffect, useState } from 'react'
import { dummyPostsData } from '../assets/assets';
import Loading from '../components/Loading';
import StoriesBar from '../components/StoriesBar';
import PostCard from '../components/PostCard';
import RecentMessages from '../components/RecentMessages';

const Feed = () => {
  const [loading, setLoding] = useState(true);
  const [feeds, setFeeds] = useState([]);

  const fetchFeeds = async () =>{
    setFeeds(dummyPostsData);
    setLoding(false);
  }
   useEffect(() =>{
    fetchFeeds();
   })
  return !loading? (
    <div className='h-full overflow-y-scroll no-scrollbar py-10 xl:pr-5 flex items-start justify-center xl:gap-8'>
      <div>
        <StoriesBar/>
        <div className='p-4 space-y-6'>{feeds.map((post)=>(<PostCard key={post._id} post={post}/>))}</div>
      </div>
      
     <div className='max-xl:hidden sticky top-0'>
       {/* <div className='max-w-xs bg-white text-xs p-4 rounded-md inline-flex flex-col gap-2 shadow'>
        <h1>Sponsered</h1>
      </div> */}
      
      <RecentMessages/>
     </div>
    </div>
  ) : <Loading/>
}

export default Feed
