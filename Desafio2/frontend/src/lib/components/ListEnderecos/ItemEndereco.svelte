<script lang="js">
    export let endereco;
</script>

<li class="endereco">
    <div class="endereco-container">
        <h3 class="infor-cep">
            CEP: <span>{endereco.cep}</span>
        </h3>
       <p>
            {endereco.rua}, {endereco.bairro}, {endereco.cidade} ({endereco.uf})
       </p>
    </div>
</li>

<style>
    h3 {
        color: var(--blue);
    }

    span {
        color: var(--white);
    }

    p {
        color: var(--white);
        font-size: 12px;
    }

    
    .endereco {
        background-color: var(--form-color-background);
        padding: 0.5rem 1rem;
        margin: 1rem 0.5rem;
    }

    .endereco-container {
        display: flex;
        flex-direction: column;
        gap: 5px;

    }

</style>
