<script lang="ts">
    import Tag from "./Tag.svelte";

    export let href: string;
    export let tagDesabilitada = false;
    
</script>

<a {href}>
    <Tag ativa={true} tamanho="lg" {tagDesabilitada}>
        <slot></slot>
    </Tag>
</a>