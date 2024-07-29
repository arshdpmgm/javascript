// Add an event listener to the element with ID 'fetchData' that triggers when it's clicked

document.getElementById('fetchData').addEventListener('click', async () => {

    try {
        // Send a GET request to the specified URL to fetch data from the server
        const response = await fetch('http://localhost:3000/api/items');

        // Check if the response status is not 
        if (!response.ok) {

            // Throw an error if the response status is not ok
            throw new Error('Network response was not ok');
        }

       
        const data = await response.json();

        const dataContainer = document.getElementById('data-container');

        // Update the inner HTML of the 'data-container' element with the fetched data
        
        dataContainer.innerHTML = data.map(item => `

            <div>
                <h3>${item.name}</h3>
                <p>${item.Price}</p>
                <p>${item.Description}</p>
            </div>

        `).join('');
        
    } catch (error) {
        // Log any errors that occur during the fetch

    }
});
