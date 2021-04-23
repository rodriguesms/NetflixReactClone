import React from 'react';
import './style.css';


export default ({item}) => {
    console.log(item);

    let firstDate = new Date(item.first_air_date);
    let genres = [];

    for(let i in item.genres){
        genres.push(item.genres[i].name);
    }

    return (
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">{item.original_name}</div>
                    <div className="featured--info">
                        <div className="featured--info--points">Nota: {item.vote_average}</div>
                        <div className="featured--info--year">{firstDate.getFullYear()}</div>
                        <div className="featured--info--seasons">{item.number_of_seasons} Temporada{item.number_of_seasons!==  1 ? 's' : ''}</div>
                    </div>
                    <div className="featured--description">{item.overview.length > 300 ? item.overview.substr(0, 300)+'...' : item.overview}</div>
                    <div className="featured--buttons">
                        <a className="featured--button--watch" href={`/watch/${item.id}`}> ▶ Assistir</a>
                        <a className="featured--button--info" href={`/list/add/${item.id}`}> ⓘ Mais Informações</a>
                    </div>
                    <div className="featured-genres">
                        <strong>Gêneros: {genres.join(', ')}</strong>

                    </div>
                </div>
            </div>
        </section>
    );
}