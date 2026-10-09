import { Search } from 'lucide-react'
import Input from './Input'

export default function SearchInput({ label = 'Search', placeholder = 'Search…', ...props }) {
  return <Input {...props} label={label} placeholder={placeholder} type="search" leadingIcon={Search} />
}
