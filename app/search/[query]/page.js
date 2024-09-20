

import * as streamingAvailability from "streaming-availability";

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default async function Page({ params }) {
    const { query } = params;

    const RAPID_API_KEY = "9a493b1f28msh958f0a6e83ae3b6p1dab81jsnac8f73621345";
    const client = new streamingAvailability.Client(new streamingAvailability.Configuration({
        apiKey: RAPID_API_KEY
    }));

    let movies = [];
    try {
        await delay(1000);
        const data = await client.showsApi.searchShowsByTitle({
            title: query,
            country: "in",
        });

        let response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/add`, {
            method: "POST",
            body: JSON.stringify({ data }),
            headers: {
                "Content-Type": "application/json",
            },
        })
        //let result = await response
        console.log(response)
        let keys = Object.keys(response);
        keys.forEach(function (key) {
            movies.push(response[key]);
        });
    } catch (error) {
        console.error("Error fetching movie data: ", error);
    }

    return (
        <div className='text-white'>
            <h1>Results for: {query}</h1>
            {movies.length ? (
                <ul>
                    {movies.map((movie) => (
                        <li key={movie.id}>
                            <h2>{movie.title}</h2>
                            <p>{movie.overview}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No movies found.</p>
            )}
        </div>
    );
}