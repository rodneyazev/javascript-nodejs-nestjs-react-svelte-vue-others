<script lang="ts">
    import "../app.css";
    import Cabecalho from "$lib/components/paginas/layout/Cabecalho.svelte";
    import MinhaLista from "$lib/components/paginas/layout/MinhaLista.svelte";
    import { minhaLista } from "$lib/store/minhaLista";
    import Rodape from "$lib/components/paginas/layout/Rodape.svelte";
</script>

<div class="container-principal">
    <Cabecalho />

    <div class="estilo-principal">
        {#if $minhaLista.length}
            <div class="minha-lista-container">
                <MinhaLista />
                <div class="divisoria" />
            </div>
        {/if}
        <slot />
    </div>

    <Rodape />
</div>

<style>
    .container-principal {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    .estilo-principal {
        text-align: center;
        padding: 0 5vw 3.375rem;
        flex: 1;
    }

    .minha-lista-container {
        margin-bottom: 2rem;
    }

    .divisoria {
        width: 40vw;
        height: 2px;
        background-color: var(--verde);
        margin: 0 auto;
    }
    
</style>
