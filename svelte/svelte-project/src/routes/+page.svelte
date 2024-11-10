<script lang="ts">
    import Titulo from "$lib/components/compartilhados/Titulo.svelte";
    import categorias from "$lib/json/categorias.json";
    import Categoria from "$lib/components/paginas/index/Categoria.svelte";
    import { beforeNavigate } from "$app/navigation";
    import { minhaLista } from "$lib/store/minhaLista";
    import TagLink from "$lib/components/compartilhados/TagLink.svelte";

    $: listaVazia = $minhaLista.length === 0;

    beforeNavigate((navigation) => {
        //console.log(navigation)
        if (listaVazia && navigation.to?.url.pathname === "/receitas") {
            navigation.cancel();
        }
    });
</script>

<svelte:head>
    <title>Cook</title>
</svelte:head>

<main>
    <Titulo tag="h1">ingredientes</Titulo>
    <div class="info">
        <p>
            Selecione abaixo os ingredientes que você deseja usar na refeição:
        </p>
        <p>
            * Atenção: consideramos que você tenha em casa sal, pimenta e água.
        </p>
    </div>

    <ul class="categorias">
        {#each categorias as categoria (categoria.nome)}
            <Categoria {categoria} />
        {/each}
    </ul>

    <div class="buscar-receitas">
        <TagLink href="/receitas" tagDesabilitada={listaVazia}>Buscar receitas</TagLink>
    </div>
</main>

<style>
    .info {
        margin-bottom: 3.375rem;
    }

    .info > p {
        line-height: 2rem;
    }

    .categorias {
        margin-bottom: 4.6875rem;

        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1.5rem;
    }

    .buscar-receitas {
        display: flex;
        justify-content: center;
    }
</style>
