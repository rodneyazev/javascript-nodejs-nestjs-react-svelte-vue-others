<script lang="ts">
    import { fade } from 'svelte/transition';
    import Tag from "$lib/components/compartilhados/Tag.svelte";
    import { minhaLista } from "$lib/store/minhaLista";
    export let ingrediente: string;

    function removerIngrediente(){
        minhaLista.removerIngrediente(ingrediente);
    }

</script>

<div
    class="meu-ingrediente-container"
    transition:fade={{duration: 500}}
>

    <Tag ativa={true}>
        <button class="close" on:click={removerIngrediente}></button>
        {ingrediente}
    </Tag>

    <span class="remover" on:click={removerIngrediente} aria-hidden="true">
        Remover
    </span>

</div>


<style>
    .meu-ingrediente-container {
        position: relative;
    }

    .close {
        background-image: url("/icones/close.svg");
        height: 10px;
        width: 10px;
        cursor: pointer;

        position: absolute;
        top: 4px;
        right: 4px;
    }

    .remover {
        line-height: 24px;
        font-size: 0.875rem;
        color: var(--laranja);
        cursor: pointer;
    }
</style>