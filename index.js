//1. Load the enviornment variables
require('dotenv').config();

//2. Readh the URL from environment (process.env)
const BASE_URL = process.env.API_URL;

//3. Check if above env variable works for fetching (good for debugging)
if (!BASE_URL) {
    console.error("Error: API_URL is missing from .env file!");
    process.exit(1);
}

//Define a function to get data
async function getPosts() {
    console.log('Inside the try block, GET request: Fetching all posts....');

    try {
        //throw new Error('Custom error!');
        //code to aysncronously fetch records:
        const response = await fetch(`${BASE_URL}/posts/1`); //fetch sends the request and 'await' waits for the response

        //Check if server responded with an error status (like 400 or 500):
        if (!response.ok) {
            throw new Error(`Server error: ${response.status} ${response.statusText}`);
        }
        //convert the reveived raw response into JSON format
        const data = await response.json();
        console.log('Success! Post Title:',data);

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
        if (!response.ok) {
            throw new Error(`Server error: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        console.log('Sucess! Created Post:',data);
        //return data;
        
    }
    catch (error) {
        console.error('An error occurred during the fetch operation:', error);
    }
    
}

//PUT: Update data------
async function updatePost() {
    try {
        const response = await fetch(`${BASE_URL}/posts/1`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
                id: 1,
                title: 'Updated title',
                body: 'Updated the content.',
                userId: 1
            })
        });
         //Check if server responded with an error status (like 400 or 500):
         if (!response.ok) {
            throw new Error(`Server error: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        console.log('Success! [PUT] Updated Post:', data);
    }
    catch (error) {
        console.error('Error updating record!:',error);
    }
    
}

//----DELETE: Delete data---------
async function deletePost() {
    try {
        const response = await fetch(`${BASE_URL}/posts/1`,{
            method: 'DELETE',
        });
         //Check if server responded with an error status (like 400 or 500):
         if (!response.ok) {
            throw new Error(`Server error: ${response.status} ${response.statusText}`);
        }
        //DELETE usually returns an empty object or a 200 success response
        console.log('Success! [DELETE] Post #1 deleted! Status:',response.status);

    }
    catch (error) {
        console.error('Error deleting record!:',error);
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

async function runAll() {
    await getPosts();
    await createPost();
    //postAllRecords();
    await updatePost();
    await deletePost();
}

runAll();