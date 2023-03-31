import '../App.css'
import { ContactType } from '../types/Contact'
import { Mail, Phone, MapPin } from 'react-feather'

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
    <div className='card'>
      <img
        className='card__image'
        alt={`contact ${first}`}
        src={picture.large}
      />
      <div className='card__contact-info'>
        <h2 className='card__name'>
          {first} {last}
        </h2>
        <div className='card__contact-details'>
          <p>
            <Mail size={16} />
            {email}
          </p>
          <p>
            <Phone size={16} />
            {phone}
          </p>
          <p>
            <MapPin size={16} /> {street.number} {street.name}, {city}, {state}
          </p>
        </div>
      </div>

      {/*
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
      </div> */}
    </div>
  )
}

export default Card
