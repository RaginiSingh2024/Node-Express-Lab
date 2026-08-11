import express from 'express'
import bodyParser from 'body-parser'

// Create an Express application
const app = express()
const PORT = process.env.PORT || 3000

// Middleware setup
app.use(bodyParser.json())

// Sample data: employees array
let employees = [
    { id: 1, name: "Neha Tahilani", city: "Jaipur" },
    { id: 2, name: "Tarun Sharma", city: "Delhi" },
    { id: 3, name: "Manisha Mittal", city: "Gurgaon" },
    { id: 4, name: "Utkarsh Kumar", city: "Delhi" }
]

//  GET all employees
app.get('/employees', (req, res) => {
    res.json(employees)
})

//  GET employee by city (search)
app.get('/employees/search', (req, res) => {
    const city = req.query.city
    console.log(city)

    const results = employees.filter(
        emp => emp.city && emp.city.toLowerCase() === city.toLowerCase()
    )
    console.log(results)

    res.json(results)
})

//  GET employee by ID
app.get('/employees/:id', (req, res) => {
    const id = parseInt(req.params.id)  // read id from URL
    const employee = employees.find(emp => emp.id === id)

    if (!employee) {
        return res.status(404).json({ message: "Employee not found" })
    }

    res.json(employee)
})

//  POST: Add a new employee
app.post('/employees', (req, res) => {
    const { name, city } = req.body

    if (!name || !city) {
        return res.status(400).json({ message: "Name and city are required" })
    }

    const newEmployee = {
        id: employees.length + 1,
        name,
        city
    }

    employees.push(newEmployee)
    res.status(201).json(newEmployee)
})

// DELETE: Remove an employee by ID
app.delete('/employees/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const index = employees.findIndex(emp => emp.id === id)

    if (index === -1) {
        return res.status(404).json({ message: "Employee not found" })
    }

    // Remove from array
    const deleted = employees.splice(index, 1)
    res.json({ message: "Employee deleted successfully", deleted })
})

//  Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
