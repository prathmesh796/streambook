import SearchCard from "@/components/SearchCard";

import * as streamingAvailability from "streaming-availability";

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default async function Page({ params }) {
    const { query } = params;

    const RAPID_API_KEY = process.env.API_KEY;
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

        //console.log(data);
        movies = data || []

    } catch (error) {
        console.error("Error fetching movie data: ", error);
    }

    return (
        <div className='text-white'>
            <h1 className='text-3xl font-bold text-center p-10'>Results for: {query}</h1>
            {movies.length ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-10">
                    {movies.map(item => (
                        <SearchCard key={item.id} title={item.title} poster={item.imageSet?.verticalPoster?.w720} />
                    ))}
                </div>
            ) : (
                <p>No movies found.</p>
            )}
        </div>
    );
}