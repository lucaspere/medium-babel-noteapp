
const tasks = [];
let taskString = ""

const handleSubmit = (e) => {
   e.preventDefault();

   const newtask = taskString

   if (newtask) {
      tasks.push(newtask);

      e.target.elements.task.value = "";

      render();
   }

};

const handleInput = (e) => {

   taskString = e.target.value

   render();
} 
const deleteTask = (index) => (
   <button onClick={() => {

      tasks.splice(index, 1);

      render();
   }}>Remover</button>
);

const appRoot = document.getElementById("app");

const render = () => {
   console.log(taskString)
   const template = (
      <div>
         <h1>Aplicativo de Tarefas</h1>
         <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleInput} name="task" value={taskString}/>
            <button>Adicionar</button>
         </form>
         <ul>
            {tasks.map((task, idx) => (
               <div key={`${task}: ${idx}`}>
                  <li>{task}</li>
                  {deleteTask(idx)}
               </div>
            ))}
         </ul>
      </div>
   )

   ReactDOM.render(template, appRoot);
}

render();

const style = {
   display: "flex",
   maxWidth: "620px",
   margin: "auto 0", 
}

