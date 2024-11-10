import React, { useState } from 'react';
import Formulario from '../components/formulario';
import Lista from '../components/lista';
import Cronometro from '../components/cronometro';
import './style.scss';
import { ITarefa } from '../interfaces/ITarefa';

function App() {

  const [tarefas, setTarefas] = useState<ITarefa[]>([]);
  const [selecionado, setSelecionado] = useState<ITarefa>();

  function selectionaTarefa(tarefaSelecionada: ITarefa){
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })));
  }

  function finalizarTarefa() {
    if(selecionado) {
      setSelecionado(undefined);
      setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => {
        if(tarefa.id === selecionado.id) {
          return {
            ...tarefa,
            selecionado: false,
            completado: true
          }
        }
        return tarefa;
      }))
    }
  }

  return (
    <div className="AppStyle">
      <Formulario setTarefas={setTarefas}/>
      <Cronometro selecionado={selecionado} finalizarTarefa={finalizarTarefa}/>
      <Lista
        tarefas={tarefas}
        selecionaTarefa = {selectionaTarefa}
      />
    </div>
  );
}

export default App;
