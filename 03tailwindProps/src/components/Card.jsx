import React from 'react'

function Card({username = "SM", post="Not Assigned"}) {
    // console.log(props);
  return (
    <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
  <img className="w-24 h-24 rounded-full mx-auto" src="https://cdn.pixabay.com/photo/2023/05/02/14/15/british-shorthair-7965411_1280.jpg" alt="" width="384" height="512"/>
  <div className="pt-6 space-y-4">
    <blockquote>
      <p className="text-lg font-medium">one new output that could be helpful for us</p>
    </blockquote>
    <figcaption className="font">
      <div>
        {username}
      </div>
      <div>
        {post}
      </div>
    </figcaption>
  </div>
</figure>
  )
}

export default Card