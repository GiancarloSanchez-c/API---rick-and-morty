import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { Fragment } from 'react';
import Characters from '../components/Characters'
import Pagination from '../components/Pagination'

const Nav = () => {

  const [character, setCharacter] = useState([]);
  const [info, setInfo] = useState({});

  const url = 'https://rickandmortyapi.com/api/character';

  const fetchCharacters = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setCharacter(data.results)
        setInfo(data.info)
      })
  }

  const onPrevious = () => {
    fetchCharacters(info.prev)
  }
  const onNext = () => {
    fetchCharacters(info.next)

  }
  useEffect(() => {
    fetchCharacters(url);
  }, [])

  return (
    <Fragment>

      <nav className="navbar navbar-dark bg-dark" >
        <div className="container">
          <Link to="/" className="navbar-brand text-uppercase" >Rick and Morty App</Link>
        </div>
      </nav>
      <div className="container mt-5">
        <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
        <Characters character={character} />
        <Pagination />
      </div>
    </Fragment>

  )
}

export default Nav
