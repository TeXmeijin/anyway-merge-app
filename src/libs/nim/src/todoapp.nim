import std/[jsffi, jsfetch, jscore, asyncjs]
import sequtils

var module {.importc.}: JsObject
var console {.importc.}: JsObject
var sessionStorage {.importc.}: JsObject
var JSON {.importc.}: JsObject

proc nimSetTodo(todo:cstring) =
  if todo.len == 0:
    return
  let todosStorage = sessionStorage.getItem("todo".cstring)
  var todos = newSeq[cstring]()
  if not todosStorage.isNil:
    todos = JSON.parse(todosStorage).to(seq[cstring])
  todos.add(todo)
  sessionStorage.setItem("todo", JSON.stringify(todos))

proc nimLoadTodos():JsObject =
  let todosStorage = sessionStorage.getItem("todo".cstring)
  let todos =
    if not todosStorage.isNil:
      JSON.parse(todosStorage).to(seq[cstring])
    else:
      newSeq[cstring]()
  return todos.toJs()

proc nimDeleteTodo(num:cint) =
  let todosStorage = sessionStorage.getItem("todo".cstring)
  var todos =
    if not todosStorage.isNil:
      JSON.parse(todosStorage).to(seq[cstring])
    else:
      newSeq[cstring]()
  if num > todos.len-1:
    return
  todos.delete(num.int)
  sessionStorage.setItem("todo", JSON.stringify(todos))

module.exports.nimSetTodo = nimSetTodo
module.exports.nimLoadTodos = nimLoadTodos
module.exports.nimDeleteTodo = nimDeleteTodo
