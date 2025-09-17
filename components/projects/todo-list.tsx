"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trash2, Plus, CheckCircle2, Circle } from "lucide-react"

interface Todo {
  id: number
  text: string
  completed: boolean
  createdAt: Date
}

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [inputValue, setInputValue] = useState("")
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all")

  // Load todos from localStorage on component mount
  useEffect(() => {
    const savedTodos = localStorage.getItem("todos")
    if (savedTodos) {
      const parsedTodos = JSON.parse(savedTodos).map((todo: any) => ({
        ...todo,
        createdAt: new Date(todo.createdAt),
      }))
      setTodos(parsedTodos)
    }
  }, [])

  // Save todos to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const addTodo = () => {
    if (inputValue.trim() !== "") {
      const newTodo: Todo = {
        id: Date.now(),
        text: inputValue.trim(),
        completed: false,
        createdAt: new Date(),
      }
      setTodos([...todos, newTodo])
      setInputValue("")
    }
  }

  const toggleTodo = (id: number) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)))
  }

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed))
  }

  const filteredTodos = todos.filter((todo) => {
    switch (filter) {
      case "active":
        return !todo.completed
      case "completed":
        return todo.completed
      default:
        return true
    }
  })

  const completedCount = todos.filter((todo) => todo.completed).length
  const activeCount = todos.length - completedCount

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-950 dark:to-pink-900 p-4">
      <div className="max-w-2xl mx-auto py-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-2xl">Lista de Tarefas</CardTitle>
            <p className="text-center text-muted-foreground">Organize suas tarefas de forma simples e eficiente</p>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Add Todo Input */}
            <div className="flex gap-2">
              <Input
                placeholder="Adicionar nova tarefa..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && addTodo()}
                className="flex-1"
              />
              <Button onClick={addTodo}>
                <Plus className="h-4 w-4" />
              </Button>
            </div>

            {/* Filter Buttons */}
            <div className="flex justify-center gap-2">
              <Button variant={filter === "all" ? "default" : "outline"} size="sm" onClick={() => setFilter("all")}>
                Todas ({todos.length})
              </Button>
              <Button
                variant={filter === "active" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter("active")}
              >
                Ativas ({activeCount})
              </Button>
              <Button
                variant={filter === "completed" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter("completed")}
              >
                Concluídas ({completedCount})
              </Button>
            </div>

            {/* Todo List */}
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {filteredTodos.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  {filter === "all" && "Nenhuma tarefa adicionada ainda"}
                  {filter === "active" && "Nenhuma tarefa ativa"}
                  {filter === "completed" && "Nenhuma tarefa concluída"}
                </div>
              ) : (
                filteredTodos.map((todo) => (
                  <div
                    key={todo.id}
                    className={`flex items-center gap-3 p-3 rounded-lg border transition-all ${
                      todo.completed
                        ? "bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800"
                        : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                    }`}
                  >
                    <button onClick={() => toggleTodo(todo.id)} className="flex-shrink-0">
                      {todo.completed ? (
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                      ) : (
                        <Circle className="h-5 w-5 text-gray-400" />
                      )}
                    </button>
                    <span className={`flex-1 ${todo.completed ? "line-through text-muted-foreground" : ""}`}>
                      {todo.text}
                    </span>
                    <span className="text-xs text-muted-foreground">{todo.createdAt.toLocaleDateString()}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => deleteTodo(todo.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))
              )}
            </div>

            {/* Clear Completed Button */}
            {completedCount > 0 && (
              <div className="text-center">
                <Button variant="outline" onClick={clearCompleted}>
                  Limpar Concluídas ({completedCount})
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
