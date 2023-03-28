export type ContactType = {
  id: {
    value: string
  }
  name: {
    first: string
    last: string
  }
  email: string
  picture: {
    large: string
  }
  location: {
    street: {
      number: number
      name: string
    }
    city: string
    state: string
  }
  phone: string
}
