import React from 'react'

const Movies = (props) => {
  return (
    <div className="mainBlock">
        <div id="one">
            <div className="firstblock">
             <img src={props.data[0].image} alt="" />
             <h1>{props.data[0].movieName}</h1>
             <h1>{props.data[0].director}</h1>
             <h1>{props.data[0].actors}</h1>
             <h1>{props.data[0].year}</h1>
            </div>
            <div className="firstblock">
             <img src={props.data[1].image} alt="" />
             <h1>{props.data[1].movieName}</h1>
             <h1>{props.data[1].director}</h1>
             <h1>{props.data[1].actors}</h1>
             <h1>{props.data[1].year}</h1>
            </div>
            <div className="firstblock">
             <img src={props.data[2].image} alt="" />
             <h1>{props.data[2].movieName}</h1>
             <h1>{props.data[2].director}</h1>
             <h1>{props.data[2].actors}</h1>
             <h1>{props.data[2].year}</h1>
            </div>
            <div className="firstblock">
             <img src={props.data[3].image} alt="" />
             <h1>{props.data[3].movieName}</h1>
             <h1>{props.data[3].director}</h1>
             <h1>{props.data[3].actors}</h1>
             <h1>{props.data[3].year}</h1>
            </div>
            <div className="firstblock">
             <img src={props.data[4].image} alt="" />
             <h1>{props.data[4].movieName}</h1>
             <h1>{props.data[4].director}</h1>
             <h1>{props.data[4].actors}</h1>
             <h1>{props.data[4].year}</h1>
            </div>      
        </div>
        <div id="two">
            <div className="secondblock">
             <img src={props.data[5].image} alt="" />
             <h1>{props.data[5].movieName}</h1>
             <h1>{props.data[5].director}</h1>
             <h1>{props.data[5].actors}</h1>
             <h1>{props.data[5].year}</h1>
            </div>
            <div className="secondblock">
             <img src={props.data[6].image} alt="" />
             <h1>{props.data[6].movieName}</h1>
             <h1>{props.data[6].director}</h1>
             <h1>{props.data[6].actors}</h1>
             <h1>{props.data[6].year}</h1>
            </div>
            <div className="secondblock">
             <img src={props.data[7].image} alt="" />
             <h1>{props.data[7].movieName}</h1>
             <h1>{props.data[7].director}</h1>
             <h1>{props.data[7].actors}</h1>
             <h1>{props.data[7].year}</h1>
            </div>
            <div className="secondblock">
             <img src={props.data[8].image} alt="" />
             <h1>{props.data[8].movieName}</h1>
             <h1>{props.data[8].director}</h1>
             <h1>{props.data[8].actors}</h1>
             <h1>{props.data[8].year}</h1>
            </div>
            <div className="secondblock">
             <img src={props.data[9].image} alt="" />
             <h1>{props.data[9].movieName}</h1>
             <h1>{props.data[9].director}</h1>
             <h1>{props.data[9].actors}</h1>
             <h1>{props.data[9].year}</h1>
            </div>      
        </div>
        <div id="three">
            <div className="thirdblock">
             <img src={props.data[10].image} alt="" />
             <h1>{props.data[10].movieName}</h1>
             <h1>{props.data[10].director}</h1>
             <h1>{props.data[10].actors}</h1>
             <h1>{props.data[10].year}</h1>
            </div>
            <div className="thirdblock">
             <img src={props.data[11].image} alt="" />
             <h1>{props.data[11].movieName}</h1>
             <h1>{props.data[11].director}</h1>
             <h1>{props.data[11].actors}</h1>
             <h1>{props.data[11].year}</h1>
            </div>
            <div className="thirdblock">
             <img src={props.data[12].image} alt="" />
             <h1>{props.data[12].movieName}</h1>
             <h1>{props.data[12].director}</h1>
             <h1>{props.data[12].actors}</h1>
             <h1>{props.data[12].year}</h1>
            </div>
            <div className="thirdblock">
             <img src={props.data[13].image} alt="" />
             <h1>{props.data[13].movieName}</h1>
             <h1>{props.data[13].director}</h1>
             <h1>{props.data[13].actors}</h1>
             <h1>{props.data[13].year}</h1>
            </div>
            <div className="thirdblock">
             <img src={props.data[14].image} alt="" />
             <h1>{props.data[14].movieName}</h1>
             <h1>{props.data[14].director}</h1>
             <h1>{props.data[14].actors}</h1>
             <h1>{props.data[14].year}</h1>
            </div>      
        </div>
        <div id="four">
            <div className="fourthblock">
             <img src={props.data[15].image} alt="" />
             <h1>{props.data[15].movieName}</h1>
             <h1>{props.data[15].director}</h1>
             <h1>{props.data[15].actors}</h1>
             <h1>{props.data[15].year}</h1>
            </div>
            <div className="fourthblock">
             <img src={props.data[16].image} alt="" />
             <h1>{props.data[16].movieName}</h1>
             <h1>{props.data[16].director}</h1>
             <h1>{props.data[16].actors}</h1>
             <h1>{props.data[16].year}</h1>
            </div>
            <div className="fourthblock">
             <img src={props.data[17].image} alt="" />
             <h1>{props.data[17].movieName}</h1>
             <h1>{props.data[17].director}</h1>
             <h1>{props.data[17].actors}</h1>
             <h1>{props.data[17].year}</h1>
            </div>
            <div className="fourthblock">
             <img src={props.data[18].image} alt="" />
             <h1>{props.data[18].movieName}</h1>
             <h1>{props.data[18].director}</h1>
             <h1>{props.data[18].actors}</h1>
             <h1>{props.data[18].year}</h1>
            </div>
            <div className="fourthblock">
             <img src={props.data[19].image} alt="" />
             <h1>{props.data[19].movieName}</h1>
             <h1>{props.data[19].director}</h1>
             <h1>{props.data[19].actors}</h1>
             <h1>{props.data[19].year}</h1>
            </div>      
        </div>
    </div>
  )
}

export default Movies




