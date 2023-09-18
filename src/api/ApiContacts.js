import axios from "./axiosSettings";



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


export const updateContact = async (id, contact) => {
    const response = await axios.patch(`/contacts/${id}`, contact);
    return response.data
};
