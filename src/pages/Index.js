import { Link, useLoaderData } from "react-router-dom"

const Landing = () => {
    const people = useLoaderData()
    console.log(people)
    if(people.isLoading){
        return <div>Loading...</div>
    }

    return(
    <div>
        <h3>People</h3>
        {people.map(person => {
            return(
                <div key={person._id} className="person">
                    <Link to={`/${person._id}`}>
                    <h1>{person.name}</h1>
                    </Link>
                    <img src={person.image} alt={person.name}/>
                    <h3>{person.title}</h3>
                </div>
            )
        })}
    </div>
    )
}

export default Landing