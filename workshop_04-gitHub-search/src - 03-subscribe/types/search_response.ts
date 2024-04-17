import User from "./user";

export default interface SearchResponse {
    isFrist: boolean,
    isLoading: boolean,
    isError: boolean,
    users: User[],
}