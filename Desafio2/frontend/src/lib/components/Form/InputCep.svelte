<script>
  import MaskInput from "svelte-input-mask";

  export let value = '';
</script>

<MaskInput 
    class='cep' 
    bind:value={value} 
    size={20} 
    mask="00000-000" 
/>  

<style>
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

    @media screen and (min-width: 1024px){
        :global(.cep) {
           width: 18rem;
        }
    }
</style>