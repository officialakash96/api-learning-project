
//Define the URL of the API (The "Endpoint")
const BASE_URL = 'https://jsonplaceholder.typicode.com';

//Define a function to get data
async function getPosts() {
    console.log('Inside the try block, GET request: Fetching all posts....');

    try {
        //throw new Error('Custom error!');
        //code to aysncronously fetch records:
        const response = await fetch(`${BASE_URL}/posts/1`); //fetch sends the request and 'await' waits for the response
        console.log('Response from website: ',response.status);
        //convert the reveived raw response into JSON format
        const data = await response.json();

        console.log('Success! Here is the data received from fetch:',data);

    }
    catch (error) {
        console.error('Error fetching data:',error.message);
    }

}


//execute the function:
getPosts();