import useSWR from 'swr'
import api from '../services/api'

export const useApi = (url) =>{
    const{data,erro}= useSWR(url, async(url) =>{
        const response = await api.get(url)
        return response
    })
    return {data,erro}
}
