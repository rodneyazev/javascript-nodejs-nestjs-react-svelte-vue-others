import { ITarefa } from '../../interfaces/ITarefa';
import style from './Lista.module.scss';
import Item from "./item";

interface Props {
    tarefas: ITarefa[],
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

function Lista({tarefas, selecionaTarefa}: Props){

    return (
        <div>
            <aside className={style.listaTarefas}>
                <h2>Estudos do dia</h2>
            </aside>
            <ul>
                {tarefas.map((item => (
                    <Item
                        selecionaTarefa={selecionaTarefa}
                        key={item.id}
                        {...item}
                    />
                )))}
            </ul>
        </div>
    )

}

export default Lista;

/*
tarefas: ITarefa[]  ou tarefas: Array<ITarefa>
*/

/*

{tarefas.map((item, index) => (
    <Item
        tarefa = {item.tarefa}
        tempo = {item.tempo}
    />
))}

*/