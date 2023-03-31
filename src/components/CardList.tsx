import '../App.css'
import Card from './Card'
import { ContactType } from '../types/Contact'
import { motion, AnimatePresence } from 'framer-motion'

interface IProps {
  contacts: ContactType[]
}

const CardList = ({ contacts }: IProps) => (
  <motion.div layout className='card-list'>
    <AnimatePresence>
      {contacts.map((contact: ContactType) => {
        return <Card key={contact.id.value} contact={contact} />
      })}
    </AnimatePresence>
  </motion.div>
)

export default CardList
