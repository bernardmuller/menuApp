import React from 'react'

export default function Dashboard() {

    const meal = fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    console.log()

    return (
        <div>
            Dashboard
            {JSON.stringify(meal)}
        </div>
    )
}


