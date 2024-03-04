import './index.css'

const CountriesList = props => {
  const {details, addVisitedCountries} = props
  const {id, name, isVisited} = details

  const countryText = isVisited ? 'Visited' : 'Visit'

  const addCountry = () => {
    addVisitedCountries(id)
  }

  return (
    <li className="list-items">
      <p className="name">{name}</p>
      {isVisited === true ? (
        <p className="para">{countryText}</p>
      ) : (
        <button type="button" onClick={addCountry} className="button">
          Visit
        </button>
      )}
    </li>
  )
}
export default CountriesList
