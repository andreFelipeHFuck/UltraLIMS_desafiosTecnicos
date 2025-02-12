<script>
    export let endereco;
</script>

<div class="endereco">
    <div class="endereco-container">
        <h2 class="info-cep">
            CEP: <span>{endereco.cep}</span>
        </h2>
        
        <div class="endereco-info">
            
            <div class="info">
                Rua: <span>{endereco.rua}</span>
            </div>

            <div class="info">
                Bairro: <span>{endereco.bairro}</span>
            </div>
        </div>
    
        <div class="endereco-info">
            
            <div class="info">
                Cidade: <span>{endereco.cidade}</span>
            </div>

            <div class="info">
                Estado: <span>{endereco.estado} ({endereco.uf})</span>
            </div>
        </div>
    </div>
</div>

<style>
    .endereco {
        display: flex;
        justify-content: center;
        background-color: var(--background-color-body);
        width: 100%;
        margin-bottom: 0.5rem;
    }

    .endereco-container {
        background-color: var(--form-color-background);
        color: var(--white);
        display: flex;
        justify-content: center;
        flex-direction: column;
        padding: 1rem 2rem;
        gap: 5px;
        padding: 2rem;
        width: 30rem;
        margin: 1rem;
        border-radius: 6px;
    }

    .info {
        color: var(--blue);
        font-weight: 500;
    }

    h2 {
        color: var(--blue);
        text-align: center;
        margin-bottom: 0.4rem;
        font-weight: 500;
        font-size: 18px;
    }

    span {
        color: var(--white);
        font-weight: 300;
    }

    .endereco-info {
        display: flex;
        flex-direction: column;
        font-size: 16px;
        gap: 5px;
    }

    @media screen and (min-width: 1024px){
        .endereco-container {
            justify-content: none;
        }

        h2 {
            font-size: 24px;
        }

        .endereco-info {
            justify-content: center;
        }

        .endereco-info {
            font-size: 20px;
        }
    }
</style>