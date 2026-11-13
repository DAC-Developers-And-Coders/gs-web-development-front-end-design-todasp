 "use client"

 const FormCard = ({form, onEdit, onDelete}) => {
    return (
        <>
            <div className="flex flex-col bg-white rounded-2xl border-2 border-black ">
                <div className="text-center">
                    <div className="flex flex-col gap-2 p-4">
                        <h3>{form.title}</h3>
                        <p>{form.data}</p>
                    </div>
                    <div>
                        <p>{form.observations}</p>
                    </div>
                    <div>
                        <button onClick={() => onEdit(form)}>Editar</button>
                        <button onClick={() => onDelete(form)}>Excluir</button>
                    </div>
                </div>
            </div>
        </>
    )
 }

 export default FormCard;