import React, { useState } from 'react'


import styled from 'styled-components'
const Items = styled.div`
    text-align:center;
`

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
export default function OnMouseLeave() {
    const [sobreModal, setSobreModal] = useState(false)
    const [habilidadesModal, setHabilidadesModal] = useState(false)
    const [contatosModal, setContatosModal] = useState(false)


    return (
        <>
            <Items>
                <h4>OnMouseLeaveuseLeave</h4>

                <ItemsList>
                    <ul class="lista">
                        <div>
                            <li onMouseEnter={() => setSobreModal(true)}>
                                Sobre
                            </li>

                            <p onClick={() => setSobreModal(false)}>fechar</p>
                        </div>
                        {
                            sobreModal ?
                                <h1>sobre aqui</h1>
                                : null
                        }
                        <div>

                            <li onMouseEnter={() => setHabilidadesModal(true)}>
                                Habilidades
                            </li>

                            <p onMouseLeave={() => setHabilidadesModal(false)}>fechar</p>


                        </div>

                        {
                            habilidadesModal ?
                                <h1>habilidades aqui</h1>
                                : null
                        }
                        <div>
                            <li onMouseEnter={() => setContatosModal(true)}>
                                Contato
                            </li>

                            <p onClick={() => setContatosModal(false)}>fechar</p>
                        </div>
                        {
                            contatosModal ?
                                <h1>Contato aqui</h1>
                                : null
                        }

                    </ul>
                </ItemsList>
            </Items>
        </>
    )
}
