export function storeToken(token: string): void {
    localStorage.setItem("token", token);
}

export async function authenticatedFetch(url: string, options: RequestInit = {}): Promise<Response> {
    const token = localStorage.getItem("token");

    const headers = new Headers(options.headers || {});
    if (token) {
        headers.append("Authorization", `Bearer ${token}`);
    }

    const fetchOptions = {
        ...options,
        headers: headers,
    };

    return fetch(url, fetchOptions);
}
