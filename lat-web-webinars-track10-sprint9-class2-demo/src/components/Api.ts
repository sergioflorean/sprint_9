import type { UserData, PostData } from "../types/types.js";
export class Api {
    private baseUrl: string; // nos permite configurar la URL base de la API a la cual se conectará la clase Api. Esto es útil para cambiar fácilmente el endpoint de la API sin tener que modificar múltiples partes del código.

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    private async handleResponse<T>(response: Response): Promise<T> {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    }
 
    async getUserInfo(): Promise<UserData> {
        try {
            const response = await fetch(`${this.baseUrl}/users/1`);
            return await this.handleResponse<UserData>(response);
        } catch (error) {
            console.error("Error fetching user info:", error);
            throw error;    
        }
    }

    async getPosts(): Promise<PostData[]> {
        try {
            const response = await fetch(`${this.baseUrl}/posts`);
            return await this.handleResponse<PostData[]>(response);
        } catch (error) {
            console.error("Error fetching posts:", error);
            throw error;
        }
    }

    async updateUserInfo(userData: UserData): Promise<UserData> {
        try {
            const response = await fetch(`${this.baseUrl}/users/1`, 
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            });
            return await this.handleResponse<UserData>(response);
        } catch (error) {
            console.error("Error updating user info:", error);
            throw error;
        }
    }

    async createPost(postData: PostData): Promise<PostData> {
        try {
            const response = await fetch(`${this.baseUrl}/posts`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(postData),
            });
            return await this.handleResponse<PostData>(response);
        } catch (error) {
            console.error("Error creating post:", error);
            throw error;
        }
    }


}



