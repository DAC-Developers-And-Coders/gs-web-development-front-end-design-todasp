 "use client"

 const FormCard = ({form, onEdit, onDelete}) => {
    return (
        <>
            <div className="flex flex-col bg-white rounded-2xl border-2 border-black mx-15 ">
                <div className="text-center">
                    <div className="flex flex-col gap-3 p-4">
                        <h3 className="text-3xl font-bold">{form.address}</h3>
                        <p className="text-slate-600">{form.data}</p>
                        <h3 className="text-2xl font-semibold">{form.title}</h3>
                        
                    </div>
                    <div>
                        <p className="text-slate-700 text-2xl">{form.observations}</p>
                    </div>
                    <div className="flex gap-3 justify-center p-4">
                        <button className="bg-green-500 border-2 border-green-700 p-3 text-xl rounded-2xl transition duration-500 hover:bg-green-300" onClick={() => onEdit(form)}>Editar</button>
                        <button className="bg-red-500 border-2 border-red-700 p-3 text-xl rounded-2xl transition duration-500 hover:bg-red-300" onClick={() => onDelete(form)}>Excluir</button>
                    </div>
                </div>
            </div>
        </>
    )
 }

 export default FormCard;