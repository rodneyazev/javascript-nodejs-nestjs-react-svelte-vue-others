import { writable } from "svelte/store";

const { subscribe, set, update } = writable<string[]>([]);


export const minhaLista = {
    subscribe,
    set,
    adicionarIngrediente(ingrediente: string){
        update(((valorAtual) => [...valorAtual, ingrediente]));
    },
    removerIngrediente(ingrediente: string){
        update((valorAtual) => valorAtual.filter((item) => item !== ingrediente));
    }
};






/*

minhaLista.set(['a','b','c'])

minhaLista.update((valorAtualStore) => [...valorAtualStore, 'd'] )

*/