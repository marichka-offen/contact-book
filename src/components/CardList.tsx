import '../App.css'
import Card from './Card'
import { ContactType } from '../types/Contact'

interface IProps {
  contacts: ContactType[]
}

const CardList = ({ contacts }: IProps) => (
  <div className='card-list'>
    {contacts.map((contact: ContactType) => {
      return <Card key={contact.id.value} contact={contact} />
    })}
  </div>
)

export default CardList
