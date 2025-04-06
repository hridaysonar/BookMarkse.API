import React, { useEffect, useState } from 'react';
import { FaBookmark } from "react-icons/fa";

const Blog = ({setReading,reading ,setBookmarks,bookmarks}) => {

    const [blog, setBlog] = useState([])


    const buttonHendle =(title)=>{
        
      const newBookMarks =  bookmarks.filter((book)=>book!==title)
      setBookmarks(newBookMarks)
      console.log(newBookMarks);
        
    }

    const handleBookmark =(redingTime,title)=>{
        // console.log('hello word',redingTime);
        setBookmarks([...bookmarks,title])
        setReading(reading+redingTime)
    }
    // useEffect(()=>{
    //     fetch("blogs.json")
    //     .then(res=>res.json())
    //     .then(data=>setblog(data))
    // },[])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("/blogs.json")

                const blogData = await res.json()
                setBlog(blogData)
            } catch (error) {
                console.error(error);

            }
        }
        fetchData()
    }, [])


    return (
        <div className='m-2'>
            <h1 className='text-3xl' >total:{blog.length}</h1>
            <div className="alll-blogs">
                {/* {
                    blog.map((item)=>(<div key={item.id}>{item.author}</div>))
                } */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {blog.map(({ id, title, author, author_img, posted_date, reading_time, hashtags, cover }) => (
                        <div key={id} className="card bg-base-100 w-96 shadow-sm">
                            <figure>

                                <img src={cover} alt={title} />
                            </figure>
                            <div className="card-body">
                                <div className='author flex justify-around items-center'>
                                    <h3>{author}</h3>
                                    <img className='w-16' src={author_img} alt="" />
                                    <button className=' cursor-pointer' onClick={()=>handleBookmark(reading_time,title)} ><FaBookmark /></button>
                                </div>

                                <h2 className="card-title">{title}</h2>
                                <p>By {author} — {posted_date}</p>
                                {/* <p className=''>{hashtags}</p> */}
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {hashtags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className=" mx-auto text-sm  "
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="card-actions justify-end">
                                    <button onClick={()=>buttonHendle(title)} className="btn btn-primary">mark as read</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </div>
    );
};

export default Blog;