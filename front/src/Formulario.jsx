import "./Formulario.css";
import { useState } from "react";

export function Formulario({setUser}) {
    const [usuario, setUsuario] = useState("")
    const [contraseña, setContraseña] = useState("")
    const [error, setError] = useState(false)
    
    
    
    const handleSubmit = (e) => {
        e.preventDefault()
        
        if(usuario=="" || contraseña==""){ 
            setError(true)
            return
        }
        setError(false)

        setUser([nombre])
    }

    return (
        <section>

            <h1>login</h1>


            <form className="formulario"
                onSubmit={handleSubmit}
                
                >
                <input type="text"
                    value={usuario}
                    onChange={e => setUsuario(e.target.value)}

                />
                <input type="password"
                    value={contraseña}
                    onChange={e => setContraseña(e.target.value)}
                />

                <button> Iniciar sesion</button>

            </form>
            {error && <p> Todos los campos son obligatorios</p>}
        </section>
    )


}