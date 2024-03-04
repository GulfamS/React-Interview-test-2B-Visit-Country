import './index.css'

const VisitedCountries = props => {
  const {visitedCountryDetails, deleteVisitedCountry} = props
  const {name, imageUrl, id} = visitedCountryDetails

  const remove = () => {
    deleteVisitedCountry(id)
  }

  return (
    <li className="visited-country-list">
      <div className="visited-container">
        <img src={imageUrl} alt="thumbnail" className="image" />
        <div className="country-details">
          <p className="country-name">{name}</p>
          <button
            type="button"
            onClick={remove}
            data-testid="delete"
            className="remove-btn"
          >
            Remove
          </button>
        </div>
      </div>
    </li>
  )
}
export default VisitedCountries
