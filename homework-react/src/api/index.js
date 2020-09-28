import PORT from './host.config'
import axiosApi from './axios'


const defaultApi = {
    // get agent list data
    getListData: async () => {
        const url = `${PORT.BASE_URL}/agents`
        const res = await axiosApi.ajax_get(url)
        return res
    },
    // update agent list item data
    updateData: async (id, data) => {
        const url = `${PORT.BASE_URL}/agents/${id}`
        const res = await axiosApi.ajax_put(url, data)
        return res
    }
}

const combinApi = Object.assign(
    {}, 
    defaultApi, 
)

export default combinApi