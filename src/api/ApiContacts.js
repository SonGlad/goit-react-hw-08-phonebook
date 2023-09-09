import axios from "./ApiSettings";



export const addContact = async (contactData) => {
    const response = await axios.post(`/contacts`, contactData)
    return response.data
};


export const allContacts  = async () => {
    const response = await axios.get(`/contacts`);
    return response.data
};


export const removeContact = async (id) => {
    const response = await axios.delete(`/contacts/${id}`);
    return response.data
};
