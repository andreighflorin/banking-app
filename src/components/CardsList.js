import './CardsList.css'
import {Link} from 'react-router-dom'
import {useData} from '../hooks/useData'
import Edit from '../media/images/edit-icon.svg'

export default function CardsList() {

  const {data} = useData();

  return (
    <div className="container">
      {data.map(card => (
          <div key={card.number} className={`card-wrapper ${card.type}-card`}>
            <div className="card-top">
                <img src="" alt="" className={`banking-logo ${card.type}`}/>
              <div className="card-top-right">
                <h5>CVC<span>{card.cvc}</span></h5>
                <h5>Expires<span>{card.date}</span></h5>
              </div>
            </div>
            <div className="card-bottom">
              <div className="card-bottom-left">
                <h3>{card.name}</h3>
                <p>{card.number}</p>
              </div>
              <Link to={`/cards/${card.number}`}>
                <img src={Edit} alt="" className="edit-icon"/>
              </Link>
            </div>
          </div>
      ))}
    </div>
  );
}