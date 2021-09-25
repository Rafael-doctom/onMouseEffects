import React, { useState } from 'react';
import styled from 'styled-components'

const TextCenter = styled.div`
    text-align:center;
    font-size:2rem;
    padding:1rem;
    `
const ItemsList = styled.div`
    text-align:center;
    font-size:2rem;

    .lista{
        color:gray;
        display:flex;
        justify-content:center;
    }
    .lista li{
        font-size:15px;
        list-style:none; 
        margin-left:1rem;
        list-style:none;
    }
   
`

export default function OnClickMouse() {
    const [sobreModal, setSobreModal] = useState(false)
    const [habilidadesModal, setHabilidadesModal] = useState(false)
    const [contatosModal, setContatosModal] = useState(false)

    return (
        <>
            <TextCenter>
                <span>
                    OnClickMouse
                </span>
            </TextCenter>

            <ItemsList>
                <ul class="lista">
                    <li onClick={() => setSobreModal(true)}>
                        Sobre


                    </li>
                    {
                        sobreModal ?
                            <h1>sobre aqui</h1>
                            : null
                    }
                    <li onClick={() => setHabilidadesModal(true)}>
                        Habilidades


                    </li>
                    {
                        habilidadesModal ?
                            <h1>habilidades aqui</h1>
                            : null
                    }
                    <li onClick={() => setContatosModal(true)}>
                        Contato

                    </li>
                    {
                        contatosModal ?
                            <h1>Contato aqui</h1>
                            : null
                    }

                </ul>
            </ItemsList>
        </>
    )
}