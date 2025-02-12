<script lang="js">
    import { getEnderecos } from "$lib/requests";

    export let onSubmit;

    let filter = 'cidade';
    let order = '1';
    let page = 1;
    let errorStatus = 0;
    
    const submitOrder = async () => {
        const responseEnderecos = await getEnderecos(page, filter, order);
        const enderecosData = await responseEnderecos.json();

        console.log(enderecosData);
        
        if(responseEnderecos.ok) {
            console.log("Funcionando");
            errorStatus = responseEnderecos.status;
            onSubmit(enderecosData);
        }else{
            errorStatus = responseEnderecos.status;
            onSubmit(null)
        }
    }
</script>

<form on:submit|preventDefault={submitOrder}>
    <div class="select">
        <div class="filter">
            <label for="filter" class="filter-label"></label>
            <select name="filter" id="filter" bind:value={filter}>
                <option value="cidade">Cidade</option>
                <option value="bairro">Bairro</option>
                <option value="estado">Estado</option>
            </select>
        </div>
    
        <div class="order">
            <label for="order" class="order-label"></label>
            <select name="order" id="order" bind:value={order}>
                <option value="1">Crescente</option>
                <option value="-1">Decrescente</option>
            </select>
        </div>
    </div>

   <input class="submit" type="submit" value="Ordenar">
</form>

<style>
    form {
        background-color: var(--form-color-background);
        align-items: center;
        display: flex;
        flex-direction: column;
        padding: 1rem;
        gap: 10px;
        border-radius: 6px;
    }

    select {
        color: var(--white);
        background-color: var(--form-color-background);
        border: 2px solid var(--form-borde-color) !important;
        border-radius: 5px;
        border: none;
        text-align: center;
        width: 6rem;
        padding: 3px;
    }

    option {
        width: 5rem;
        font-size: 16px;
        color: var(--white);
        background-color: var(--form-color-background);
    }

    .select {
        display: flex;
        flex-direction: row;
        gap: 20px;
    }

    .submit {
        border: none;
        background-color: var(--red);
        color: var(--white);
        font-weight: 500;
        cursor: pointer;
        height: 2rem;
        width: 15rem;
        border-radius: 6px;

    }
</style>