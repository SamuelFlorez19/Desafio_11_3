import { useState } from "react"

const Contador = () => {

    const [estado, setEstado] = useState(0)

    const incrementar = () => {
        setEstado(estado + 1)
    }

    const decrementar = () => {
        setEstado(estado - 1)
    }

    const restear = () => {
        setEstado(0)
    }

    return (
        <>
            <div className='numero'>
                <h2 className="contador">
                {estado}
                </h2>
            </div>
            <div className="container-button">
                <button className="boton" onClick={incrementar}>
                    <strong>Incrementar</strong>
                </button>
                <button className="boton" onClick={decrementar}>
                    <strong>Decrementar</strong>
                </button>
                <button className="boton" onClick={restear}>
                    <strong>Resetear</strong>
                </button>
        </div>
        
        
        </>
        
    )
}

export default Contador