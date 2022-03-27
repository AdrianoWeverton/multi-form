import * as C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { useNavigate } from 'react-router-dom'; 
import { ChangeEvent, useEffect } from 'react';

export const FormStep1 = () => {
    const history = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 1,
        })
    }, []);

    const handleNextStep = () => {
        if(state.name !== '') {
            history('/step2');     
        } else{
            alert("Preencha os dados!");
        }
    };
    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setName,
            payload: e.target.value
        });
    };

    return(
        <Theme>
            <C.Container>
                <p>Passo 1/3</p>
                <h1>Vamos Começar com o seu nome</h1>
                <p>Preencha o campo abaixo com o seu campo completo.</p>

                <hr />

                <label>
                    Seu Nome Completo
                    <input 
                        type='text'
                        autoFocus
                        value={state.name}
                        onChange={handleNameChange}
                    />
                </label>

                <button onClick={handleNextStep} >Próximo</button>

            </C.Container>
        </Theme>
    )
}