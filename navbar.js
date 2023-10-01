import React, { Component } from "react";
import { product as pr } from "./Product";
import classes from './caseCss.module.css'
import { useState } from "react";
import { CasesCards } from "./CaseComponent";
class ConstDisplay extends Component{
   state={
        product:pr,
        CurrentPreview:0,
        
    };
//    Show=(nos)=>{
//     alert(`Clicked Item Was ${nos}`)

      
//    }
   like=(nos)=>{  
    let currentproduct=this.state.product;
    let newlist=currentproduct[nos];
    newlist.likeCount=newlist.likeCount+1;
    currentproduct[nos]=newlist;
    
    this.setState({product:currentproduct});
   }
   dislike=(nos)=>{
    let currentproduct=this.state.product;
    let newlist=currentproduct[nos];
    newlist.dislikeCount=newlist.dislikeCount+1;
    currentproduct[nos]=newlist;
    this.setState({product:currentproduct});
   }
 selected=(nos)=>{
    this.setState({CurrentPreview:nos})
 }
   render(){
    return(
        <div className={classes.allcards}>
        <div className={classes.CardsContainer}>
            {this.state.product.map((item,pos)=>{
 return(
    <div className={this.state.CurrentPreview==pos?`${classes.Container} ${classes.selected}`:`${classes.Container}`} key={pos}  onClick={()=>{this.selected(pos)}}>
        <div className={classes.title}>
            {item.title}
        </div>
        <div className={classes.likedislikeCount}>
            {`Like Count : ${item.likeCount>=1?1:item.likeCount} `}
        </div>
        <div className={classes.likedislikeCount}>
            {`Dislike Count : ${item.dislikeCount>=1?1:item.dislikeCount} `}
        </div>
        <div>
            <button onClick={()=>{this.like(pos)}}>Like</button>
            <button onClick={()=>{this.dislike(pos)}}>Dislike</button>
        </div>
    </div>
);
})}
</div>
          <div className={classes.CaseCardShow}>{this.state.product[this.state.CurrentPreview].description}</div>
        
    </div>
    )
   }
}
export {ConstDisplay}