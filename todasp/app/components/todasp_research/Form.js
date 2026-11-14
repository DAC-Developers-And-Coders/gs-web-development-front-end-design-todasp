"use client"

import FormCard from "./FormCard"
import {useForm} from "../../hooks/useForm";
import {useState} from "react"

const Form = ({selectedAddress}) => {

    const {forms, addForm, removeForm, editForm} = useForm();

    const [title, setTitle] = useState("");
    const [observations, setObservations] = useState("");
    const [editID, setEditID] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!title.trim() || !observations.trim()) return;
        if (editID) {
            editForm(editID, title, observations)
            setEditID(null)
        } else {
            addForm(title, observations, selectedAddress)
        }
        setTitle("")
        setObservations("")
    }

    const startEdit = (form) => {
        setEditID(form.id)
        setTitle(form.title)
        setObservations(form.observations)
    }

    const cancelEdit = () => {
        setEditID(null)
        setTitle("")
        setObservations("")
    }

    return (
        <>
            <section id="form" className="min-h-dvh grid grid-cols-1 gap-3 pt-20">
                <h2 className="text-3xl text-slate-900 pt-4 text-center md:text-4xl 2xl:text-5xl">Anotações</h2>
                <div className="flex flex-col gap-8 items-center text-center">
                    <p className="text-slate-700 text-balance text-xl md:text-3xl 2xl:text-4xl">
                        Adicione suas anotações sobre a região selecionada:
                    </p>
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 bg-white p-10 rounded-lg border-2 border-black w-full max-w-md">

                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Título" className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-red-500" />

                        <textarea value={observations} onChange={(e) => setObservations(e.target.value)} required rows={4} placeholder="Observações" className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-yellow-300" />

                        <div className="flex gap-2 border-2 bg-yellow-300 border-yellow-500 rounded-lg p-2 justify-center transition duration-500 hover:bg-yellow-200">
                            <button type="submit">
                                {editID ? "Editar" : "Adicionar"}
                            </button>
                            {editID && (
                                <button type="button" onClick={cancelEdit}>
                                    Cancelar
                                </button>
                            )}
                        </div>
                    </form>
                </div>

                <div className="w-full mt-5">
                    {forms.length === 0 ? (
                        <p className="text-center text-gray-500">Nenhuma anotação adicionada.</p>) : (
                        <div className="grid grid-cols-1 gap-4">
                            {forms.map((form) => (
                                <FormCard key={form.id} form={form} onEdit={() => startEdit(form)} onDelete={() => removeForm(form.id)} />
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </>
    )
}
export default Form;