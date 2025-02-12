<script lang="js">
    import MaskInput from "svelte-input-mask";

    import { postEndereco } from '../../requests/index.js';

    export let onSubmit;

    let cep = '';
    let errorStatus = 0;

    const handleChange = ({ detail }) => {
        cep = detail
             .inputState
             .maskedValue
             .split('-')
             .join('');
    }

    const submitCep = async () => {
        const responseEndereco = await postEndereco(cep);

        console.log(responseEndereco);
        
        const enderecoData = await responseEndereco.json();
        console.log(enderecoData.message);
        
        if(responseEndereco.ok) {
            errorStatus = responseEndereco.status;
            onSubmit(enderecoData);
        }else{
            errorStatus = responseEndereco.status;
            onSubmit(null);
        }
    }

</script>

<form on:submit|preventDefault={submitCep}>
    <label for="cep">
        Digite o CEP
    </label>

    <div class="cep-container">
        <div class="input-container">
            <MaskInput 
                class='cep' 
                size={8} 
                mask="00000-000" 
                placeholder="CEP" 
                on:change={handleChange}
            />  
    
            {#if errorStatus === 404}
                <sapn class="error">
                    CEP passado é inválido 
                </sapn>
            {/if}
        </div>

        <input class="submit" type="submit" value="Consultar">
    </div>
</form>

<style>
    form {
        align-items: center;
        background-color: var(--form-color-background);
        border-radius: 10px;
        color: var(--white);
        display: flex;
        flex-direction: column;
        padding: 1rem;
    }

    label {
        margin-bottom: 1rem;
    }

    input {
        border: none;
        width: 15rem;
        height: 2rem;
        border-radius: 6px;
    }

    .error {
        font-size: 10px;
        color: var(--red);
    }

    .cep-container {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    .input-container {
        display: flex;
        flex-direction: column;
        gap: 2px;
    }

    :global(.cep) {
        color: var(--white);
        background-color: var(--form-color-background);
        border: 2px solid var(--form-borde-color);
        border-radius: 6px;
        margin-bottom: 0.3rem;
        width: 15rem;
        height: 2rem;
        font-weight: 500;
    }

    :global(.cep:focus) {
        border: 2px solid var(--blue);
    }

    
    .submit {
        background-color: var(--red);
        color: var(--white);
        font-weight: 500;
        cursor: pointer;
    }

    .submit:hover{
        font-weight: 700;
    }
    
    @media screen and (min-width: 1024px){
        .cep-container {
            flex-direction: row;
            gap: 5px;
        }

        .cep {
           width: 18rem;
        }
        
        .submit {
            width: 5rem;
        }
    }
</style>