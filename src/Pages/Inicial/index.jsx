import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCommentThunk } from "../../store/modules/user/thunks";
import "./style"
import imageRobo from "../../assets/img/kenzinho.png"

import {Div, Li,DivLi, DivS} from "./style"


function Inicial(){
    const [input, setInput] = useState("")
    const dispatch = useDispatch();
    const comentarios = useSelector((state) => state.user.comment)

    return (
        <Div>
            <DivS>
                <ul>
                    {
                        comentarios.map((item, index) => (
                            <DivLi key={index}>
                                <Li >{item}</Li>
                                <img src={imageRobo} alt="" />
                            </DivLi>
                        ))
                    }
                </ul>
            </DivS>
            <div>
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
                <button onClick={() => dispatch(addCommentThunk(input))}>Enviar</button>
            </div>
        </Div>
    )
}

export default Inicial;