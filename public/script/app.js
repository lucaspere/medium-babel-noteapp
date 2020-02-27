"use strict";

var tasks = [];
var taskString = "";

var handleSubmit = function handleSubmit(e) {
  e.preventDefault();
  var newtask = taskString;

  if (newtask) {
    tasks.push(newtask);
    e.target.elements.task.value = "";
    render();
  }
};

var handleInput = function handleInput(e) {
  taskString = e.target.value;
  render();
};

var deleteTask = function deleteTask(index) {
  return React.createElement("button", {
    onClick: function onClick() {
      tasks.splice(index, 1);
      render();
    }
  }, "Remover");
};

var appRoot = document.getElementById("app");

var render = function render() {
  console.log(taskString);
  var template = React.createElement("div", null, React.createElement("h1", null, "Aplicativo de Tarefas"), React.createElement("form", {
    onSubmit: handleSubmit
  }, React.createElement("input", {
    type: "text",
    onChange: handleInput,
    name: "task",
    value: taskString
  }), React.createElement("button", null, "Adicionar")), React.createElement("ul", null, tasks.map(function (task, idx) {
    return React.createElement("div", {
      key: "".concat(task, ": ").concat(idx)
    }, React.createElement("li", null, task), deleteTask(idx));
  })));
  ReactDOM.render(template, appRoot);
};

render();
var style = {
  display: "flex",
  maxWidth: "620px",
  margin: "auto 0"
};