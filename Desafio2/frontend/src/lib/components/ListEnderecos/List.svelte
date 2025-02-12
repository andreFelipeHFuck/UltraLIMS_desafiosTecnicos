<script lang="js">
    import SubTitle from "../SubTitle.svelte";
    import ItemEndereco from "./ItemEndereco.svelte";

    export let listEnderecos;
</script>

<div>
    <SubTitle>Endereços:</SubTitle>

    {#if listEnderecos.length === 0}
        <p>Nenhum endereço pesquisado até o momento</p>
    {:else}
        <ul>
            {#each listEnderecos as endereco}
                <ItemEndereco {endereco}></ItemEndereco>
            {/each}
        </ul>
    {/if}
</div>

<style>
    p {
        color: var(--white);
        font-size: 12px;
        padding: 1rem;
    }
</style>