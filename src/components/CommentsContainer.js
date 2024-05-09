import React from 'react'
import Comment from './Comment';

const commentData=[
    {
        name:"Nidhi Chaudhari",
        text:"Lorem ispum dolor sit amet",
        replies:[{
            name:"Nidhi Chaudhari",
            text:"Lorem ispum dolor sit amet",
            replies:[]
        },
        {
            name:"Nidhi Chaudhari",
            text:"Lorem ispum dolor sit amet",
            replies:[]
        },]
    },
    {
        name:"Nidhi Chaudhari",
        text:"Lorem ispum dolor sit amet",
        replies:[{
            name:"Nidhi Chaudhari",
            text:"Lorem ispum dolor sit amet",
            replies:[{
                name:"Nidhi Chaudhari",
                text:"Lorem ispum dolor sit amet",
                replies:[]
            },]
        },
        ]
    },
    {
        name:"Nidhi Chaudhari",
        text:"Lorem ispum dolor sit amet",
        replies:[{
            name:"Nidhi Chaudhari",
            text:"Lorem ispum dolor sit amet",
            replies:[]
        },]
    },
    {
        name:"Nidhi Chaudhari",
        text:"Lorem ispum dolor sit amet",
        replies:[{
            name:"Nidhi Chaudhari",
            text:"Lorem ispum dolor sit amet",
            replies:[{
                name:"Nidhi Chaudhari",
                text:"Lorem ispum dolor sit amet",
                replies:[{
                    name:"Nidhi Chaudhari",
                    text:"Lorem ispum dolor sit amet",
                    replies:[{
                        name:"Nidhi Chaudhari",
                        text:"Lorem ispum dolor sit amet",
                        replies:[]
                    },]
                },]
            },]
        },]
    },
    {
        name:"Nidhi Chaudhari",
        text:"Lorem ispum dolor sit amet",
        replies:[{
            name:"Nidhi Chaudhari",
            text:"Lorem ispum dolor sit amet",
            replies:[{
                name:"Nidhi Chaudhari",
                text:"Lorem ispum dolor sit amet",
                replies:[]
            },]
        },]
    },
];

const CommentsList=({comments})=>{
return comments.map((comment,index)=>(
    <div key={index}>
<Comment  data={comment}/>
<div className='pl-5  ml-5'>
<CommentsList  comments={comment.replies}/>  
</div>
</div>
))

}

const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
      <h1 className='text-2xl font-bold'>Comments:</h1>
    <CommentsList comments={commentData}/>  
    </div>
  )
}

export default CommentsContainer
