<script lang="js">
    import { getEnderecos } from "$lib/requests";

    import SubTitle from "../SubTitle.svelte";
    import FormEnderecos from "./FormEnderecos.svelte";
    import List from "./List.svelte";

    let erroStatus = 0;
    let page = 1;

    let enderecos = [];
    
    const renderEnderecos = async () => {
        const responseEnderecos = await getEnderecos(page, 'cidade', '1');
        const enderecosData = await responseEnderecos.json();

        console.log(enderecosData);
        if(responseEnderecos.ok){
            enderecos = enderecosData;
        }else{
            return [];
        }
    };


    const handleEnderecosSubimit = async (endes) => {
        console.log(endes)
        if(endes) enderecos = endes;
    };

    renderEnderecos();
</script>

<div class="container">
    <SubTitle>
        Hisórico de CEPs pesquisados
    </SubTitle>

    <FormEnderecos onSubmit={handleEnderecosSubimit}></FormEnderecos>
</div>

<div class="container">
    <List listEnderecos={enderecos}></List>
</div>


<style>
    .container {
        align-items: center;
        background-color: var(--background-color-body);
        display: flex;
        flex-direction: column;
        padding: 1rem;
        margin-bottom: 0.5rem;
    }

    .container:last-child {
        margin-bottom: 0rem;
    }
</style>

