<script lang="js">
    import '../app.css';

    import Title from '$lib/components/Title.svelte';
    import FormCep from '$lib/components/Form/FormCep.svelte';
    import Endereco from '$lib/components/Endereco.svelte';
    import ListEnderecos from '$lib/components/ListEnderecos/ListEnderecos.svelte';
    import ItemEndereco from '$lib/components/ListEnderecos/ItemEndereco.svelte';

    let endereco;
  
    const handleCepSubmit = async (ende) => {
        if(ende) endereco = ende;
    }
</script>

<svelte:head>
    <title>Consulta de Endereços por CEP</title>
</svelte:head>

<main>
    <div class="container">
        <Title>
            Buscar Endereço por CEP
        </Title>

        
        <FormCep onSubmit={handleCepSubmit}></FormCep>
    </div>

    {#if endereco}
        <Endereco {endereco}></Endereco>
    {/if}

    <ListEnderecos></ListEnderecos>


</main>

<style>
    .container{
        align-items: center;
        background-color: var(--background-color-body);
        display: flex;
        flex-direction: column;   
        padding: 1rem; 
        margin-bottom: 0.5rem;
    }
</style>