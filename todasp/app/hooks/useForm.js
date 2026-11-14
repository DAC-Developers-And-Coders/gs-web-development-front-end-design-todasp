import {useState, useEffect} from 'react'

export const useForm = () => {
    const [forms, setForms] = useState([])

    useEffect(() =>{
        const saves = localStorage.getItem('todasp_forms')
        if (saves) {
            setForms(JSON.parse(saves))
        }
    }, [])

    useEffect(() =>{
        localStorage.setItem('todasp_forms', JSON.stringify(forms))
    }, [forms])

    const addForm = (title, observations, address = "") => {
        const newForm = {id: Date.now(), title, observations, address: address || "Região não especificada", data: new Date().toLocaleString("pt-BR")}
        setForms((prev) => [...prev, newForm])
    }

    const removeForm = (id) => {
        setForms((prev) => prev.filter((form) => form.id !== id))
    }

    const editForm = (id, uptatedTitle, updatedObservations ) => {
        setForms((prev) => prev.map((form) => form.id === id ? {...form, title: uptatedTitle, observations: updatedObservations} : form))

    }

    return {forms, addForm, removeForm, editForm}
}

