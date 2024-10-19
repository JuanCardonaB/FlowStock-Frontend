const API_URL = import.meta.env.VITE_API_URL;

// UsersTypes

export const fetchUsersTypes = async () => {
    try {
        const response = await fetch(`${API_URL}users_types`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}