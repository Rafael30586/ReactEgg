
import RickAndMortyService from '../../services/RickAndMorty.service';
import React, { useEffect, useState } from 'react';
import { Character } from './Character';

export const Characters = () => {

    let listaPersonajes = [];

    const [personajes,setPersonajes] = useState([]); 

    useEffect(()=> {
            RickAndMortyService.getAllCharacters()
        .then((data)=>setPersonajes(data.results)) //probar de usar .name aca en vez de data.results o bucle for
        .catch((error)=>console.log(error))
        //console.log(personajes);
    }, [])
    
    const characterList = personajes.map((p)=> <Character personaje={p} key={p.id}></Character>)
    //const characterList = personajes.forEach((p)=><Character personaje={p}></Character>)
    console.log(personajes);

    const character1 = <Character personaje={personajes}></Character>

    return(
        <div>
            {characterList}
        </div>
    )
}