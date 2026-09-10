import { useParams } from "react-router-dom";

function MovieDetails(){
    const { id } = useParams()

    return(
        <div className="min-h-screen bg-gray-900 flex items-center justify-center">
            <h1 className="text-white text-2xl">
                Movie Details Page - ID: {id}
            </h1>
        </div>
    )
}

export default MovieDetails