
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

//POST: create data together using array of objects
async function createPost() {

    try {
        const response = await fetch(`${BASE_URL}/posts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
                title: 'My new Post 1',
                body: 'This is the conetent of my new post 1',
                userId: 1
            })
        });
        if (response.ok) {
            const data = await response.json();
            console.log('Created Post:',data);
            return data;
        }
        else {
            console.error('Failed to post records:',response.status);    
        }

    }
    catch (error) {
        console.error('An error occurred during the fetch operation:', error);
    }
    
}


/* //Create one record in one POST request
async function createPost(record) {

   return fetch(`${BASE_URL}/posts`, {
    method: 'POST',
    headers: 'Content-Type: application/json; charset=UTF-8',
    body: JSON.stringify(record)
   }).then(response => response.json());
    
}

//use the function createPost() to call from this method to post all the records asyncronously:
async function postAllRecords() {
    try {
        const promises = dataToPost.map(record => createPost(record));
        //wait for all promises in the array to resolve:
        const results = await Promise.all(promises);
        console.log('All records posted individually:',results());
    }
    catch (error) {
        console.error('An error occurred during the fetch operation:', error);
    }
}
 */


//execute the function:

getPosts();
createPost();
//postAllRecords();