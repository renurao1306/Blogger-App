import React from "react";
import blogs from "../blogs.json";
import BlogCard from "./BlogCard";


function BlogPosts() {
    let data = blogs.blogs;

    return (
        <>
            <div style={{ backgroundImage: 'linear-gradient(to right, #fa709a 0%, #fee140 100%)', height: '700px', left: 0, right: 0, position: 'fixed' }}>
                <div style={{ paddingTop: '70px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <h1>Read our latest blogs!</h1>
                    <div style={{ display: 'flex', flexDirection: 'row', width: '90%', height: '50%' }}>
                        {
                            data.map((item) => {
                                return <BlogCard title={item.title} date={item.date} content={item.content} id={item.id} image={item.image}/>
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogPosts;