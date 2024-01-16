import React, { useState } from 'react'

export const FormComponent = () => {

    const [usuario, setUsuario] = useState({});

    const changeData = e => {
        let name_del_input = e.target.name;
        let usuario_para_modificar = usuario;

        //usuario_para_modificar[name_del_input] = e.target.value;

        setUsuario(estado_previo => ({
            ...estado_previo,
            [name_del_input]: e.target.value
        })
        );
    }

    const GetDataForm = e => {
        e.preventDefault();
        let data = e.target;
        let usuario = {
            nombre: data.nombre.value,
            apellidos: data.apellido.value,
            genero: data.gen.value,
            biografia: data.biog.value,
            enviar: data.enviar.value
        }
        setUsuario(usuario);
    }

    return (
        <div>

            <h1>Formularios con react</h1>

            {usuario.biografia && usuario.biografia.length >= 1 &&
                (
                    <div className='user_inf container'>
                        <h1>Nombre: {usuario.nombre}</h1> <hr />
                        <h1>Apellido: {usuario.apellidos}</h1><hr />
                        <h2>Genero: {usuario.genero}</h2><hr />
                        <h3>Biografia: {usuario.biografia}</h3>
                    </div>
                )
            }


            <form onSubmit={GetDataForm}>
                <input onChange={changeData} type='text' name='nombre' placeholder='Nombre' />
                <input onChange={changeData} type='text' name="apellido" placeholder='Apellido' />
                <select onChange={changeData} name='gen'>
                    <option value='hombre'>Hombre</option>
                    <option value='mujer'>Mujer</option>
                </select>
                <textarea onChange={changeData} name="biog" placeholder='Biografia'></textarea>

                <input onChange={changeData} type='submit' value="enviar" name="enviar" />
            </form>
        </div>
    )
}
