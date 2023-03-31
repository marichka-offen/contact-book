import { useEffect, useState, ChangeEvent } from 'react'
import CardList from './components/CardList'
import SearchBox from './components/SearchBox'
import { ContactType } from './types/Contact'
import { fetchData } from './utils/fetchData'
import './App.css'

const App = () => {
  const [searchField, setSearchField] = useState('')
  const [contacts, setContacts] = useState<ContactType[]>([])
  const [filteredContacts, setFilterContacts] = useState(contacts)

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await fetchData<ContactType[]>(
        'https://randomuser.me/api/?results=10&nat=us'
      )
      setContacts(users)
    }
    fetchUsers()
  }, [])

  useEffect(() => {
    const newFilteredContacts = contacts.filter((contact) => {
      return (
        contact.name.first.toLocaleLowerCase().includes(searchField) ||
        contact.name.last.toLocaleLowerCase().includes(searchField)
      )
    })

    setFilterContacts(newFilteredContacts)
  }, [contacts, searchField])

  const onSearchChange = (event: ChangeEvent): void => {
    const target = event.target as HTMLTextAreaElement
    const searchFieldString = target.value.toLocaleLowerCase()
    setSearchField(searchFieldString)
  }

  return (
    <div className='App'>
      <h1 className='app-title'>Contacts List</h1>

      <SearchBox
        className='contacts-search-box'
        onChangeHandler={onSearchChange}
        placeholder='search contacts'
      />
      <CardList contacts={filteredContacts} />
    </div>
  )
}

export default App
