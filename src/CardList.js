import React from 'react';

const CardList = (props) => {
    
    // console.log(props);
    // console.log("Props is :",JSON.stringify(props));

    console.log(props)

    const obj = props.prop;
    // const {name, height, ...rest} = obj;
    // console.log(rest);

    console.log("The Object is:  " ,obj);
    const { name, height, mass, hair_color, skin_color, eye_color, birth_year, gender, homeworld, films, species, vehicles, starships, created, edited, url } = obj;
    
    console.log(films);

    return (
        <div>
            <h3>The name is: {name}</h3>
            <h3>The height is: {height}</h3>
            <h3>The mass is: {mass}</h3>
            <h3>The hair_color is: {hair_color}</h3>
            <h3>The skin_color is: {skin_color}</h3>
            <h3>The eye_color is: {eye_color}</h3>
            <h3>The birth_year is: {birth_year}</h3>
            <h3>The gender is: {gender}</h3>
            <h3>The homeworld is: {homeworld}</h3>
            <h3>The films are: <ol>{films[0]}</ol>
                               <ol>{films[1]}</ol>
                               <ol>{films[2]}</ol>
                               <ol>{films[3]}</ol> 
                               <ol>{films[4]}</ol>   </h3>
            <h3>The vehicles is: <ol>{vehicles[0]}</ol>
                                <ol>{vehicles[1]}</ol> </h3>
            <h3>The starships is: <ol>{starships[0]}</ol>
                                <ol>{starships[1]}</ol> </h3>
            <h3>The created is: {created} </h3>
            <h3>The edited is: {edited} </h3>
            <h3>The url is: {url} </h3>
           
        </div>
    )
        
}

export default CardList;