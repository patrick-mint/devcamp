import React, { useState } from 'react';


const PictureCard = (props) => {
    const [like, setLike] = useState(props.likeCount);
    const [comment, setComment] = useState(props.commentCount);

const onClickFunction = () => {
  setLike(like +1);
};

const onKeyPress = (e) => {
    if(e.which === 13) {
    alert('Thank you for your comment')
    setComment(comment +1);
    }
}

return(

<div className="card">
<p>ID : {props.id}</p>
<p>{props.imgSrc}</p>       
<p>Create By : {props.createBy}</p>
<p>LIKE : {like}</p>
<p>COMMENT : {comment}</p>
<input type= "text" onKeyPress={onKeyPress} />
<input type= "button" value = "Like" onClick={onClickFunction} />


</div>
)
}
export default PictureCard;