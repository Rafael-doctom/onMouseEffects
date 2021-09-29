import React, { useState } from 'react'


export default function OnMouseLeave() {
    const [sobreModal, setSobreModal] = useState(false)
    return (
        <>
            <div>
                <h4>OnMouseLeaveuseLeave</h4>

                <div>
                    <ul>
                        <div>
                            <li onMouseEnter={() => setSobreModal(true)}>
                                Sobre
                            </li>
                            {
                                sobreModal ?
                                    <div>
                                        teste
                                    </div>
                                    : null
                            }
                        </div>
                        <div>
                            <li onMouseEnter={() => setSobreModal(true)}>
                                Habilidades
                            </li>
                            {
                                sobreModal ?
                                    <div>
                                        teste
                                    </div>
                                    : null
                            }
                        </div>
                        <div>
                            <li onMouseEnter={() => setSobreModal(true)}>
                                Contato
                            </li>
                            {
                                sobreModal ?
                                    <div>
                                        teste
                                    </div>
                                    : null
                            }
                        </div>
                    </ul>
                </div>
            </div>        </>
    )
}
