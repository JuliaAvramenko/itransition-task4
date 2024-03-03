// Specify the API endpoint for user data
export const apiUrl = 'http://localhost:8080';

// Make a GET request using the Fetch API
export async function apiGetUsers() {
    try {
        const response = await fetch(
            `${apiUrl}/users`,
            {
                mode: 'cors'
            }
        );
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const userData = await response.json();
        // Process the retrieved user data

        return userData;
    } catch (error) {
        console.error('Error:', error)
        return Promise.reject(error)
    }

}


export async function apiLogin(formData) {
    try {
        const response = await fetch(
            `${apiUrl}/auth`,
            {
                mode: 'cors',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            }
        )
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const authUserData = await response.json();
        // Process the retrieved user data
        // console.log(' New User Data:', newUserData);
        return authUserData;
    } catch (error) {
        console.error('Error:', error)
        return Promise.reject(error)
    }

}



export async function apiLogout(email) {
    try {
        const response = await fetch(
            `${apiUrl}/logout?email=${email}`,
            {
                mode: 'cors',
                method: 'GET'
            }
        )
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        // Process the retrieved user data
        // console.log(' New User Data:', newUserData);
        return true;
    } catch (error) {
        console.error('Error:', error);
        return Promise.reject(error)
    }

}


export async function apiPostCreateUser(formData) {
    try {
        const response = await fetch(
            `${apiUrl}/users/create`,
            {
                mode: 'cors',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            }
        )
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const newUserData = await response.json();
        // Process the retrieved user data
        // console.log(' New User Data:', newUserData);
        return newUserData;
    } catch (error) {
        console.error('Error:', error)
        return Promise.reject(error)
    }

}

export async function apiPutBlockUser(userId) {

    // Awaiting fetch which contains  
    // method, headers and content-type 
    try {
        const response = await fetch(
            `${apiUrl}/users/${userId}/block`,
            {
                mode: 'cors',
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                }
            }
        )
        if (!response.ok) {
            throw new Error('Network response was not ok')
        }
        // Awaiting for the resource to be deleted 
        const resData = 'resource blocked';
        // Return response data  
        return resData;
    } catch (error) {
        console.error('Error:', error)
        return Promise.reject(error)
    }
}

export async function apiPutUnblockUser(userId) {

    // Awaiting fetch which contains  
    // method, headers and content-type 
    try {
        const response = await fetch(
            `${apiUrl}/users/${userId}/unblock`,
            {
                mode: 'cors',
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                }
            }
        )
        if (!response.ok) {
            throw new Error('Network response was not ok')
        }
        // Awaiting for the resource to be deleted 
        const resData = 'resource unblocked';
        // Return response data  
        return resData;
    } catch (error) {
        console.error('Error:', error)
        return Promise.reject(error)
    }

}


export async function apiDeleteUser(userId) {

    // Awaiting fetch which contains  
    // method, headers and content-type 
    try {
        const response = await fetch(
            `${apiUrl}/users/${userId}/delete`,
            {
                mode: 'cors',
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                }
            }
        )
        if (!response.ok) {
            throw new Error('Network response was not ok')
        }

        // Awaiting for the resource to be deleted 
        const resData = 'resource deleted...';

        // Return response data  
        return resData;
    } catch (error) {
        console.error('Error:', error)
        return Promise.reject(error)
    }

}

