import '../App.css'
import { ContactType } from '../types/Contact'

interface IProps {
  contact: ContactType
}

const Card = ({ contact }: IProps) => {
  const {
    name: { first, last },
    email,
    picture,
    location: { street, city, state },
    phone,
  } = contact

  return (
    <div className='card-container'>
      <img alt={`contact ${first}`} src={picture.large} />
      <h2>
        {first} {last}
      </h2>
      <div className='main-contact-info'>
        <p>{email}</p>
        <p>{phone}</p>
      </div>

      <div className='contact-info'>
        <p>
          {street.number} {street.name}
        </p>
        <p>
          {city}, {state}
        </p>
      </div>
    </div>
  )
}

export default Card
