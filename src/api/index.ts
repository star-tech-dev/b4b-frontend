import { api } from '@star-tech/api'

const API = new api((import.meta.env.VITE_API_BASE_URL || '/') as string)

export default API
