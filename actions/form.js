"use server"

import * as streamingAvailability from "streaming-availability";

export const submitAction = async (e) => {
    //"use server"
    
    console.log(e.get('default-search'))
    let temp_title = e.get('default-search')

    const RAPID_API_KEY = "9a493b1f28msh958f0a6e83ae3b6p1dab81jsnac8f73621345";

    const client = new streamingAvailability.Client(new streamingAvailability.Configuration({
      apiKey: RAPID_API_KEY
    }));

    let data = await client.showsApi.searchShowsByTitle({
      title: temp_title,
      country: "in",
    });

    let response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/add`, {
      method: "POST",
      body: JSON.stringify({data}),
      headers: {
        "Content-Type": "application/json",
      },
    })

    let result = await response.json()
    console.log(result)
}