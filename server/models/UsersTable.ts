interface UsersTable {
    id: string;
    login: string;
    username: string;
    password: string;
    avatar: null | string;
    create_date: string;
    last_online: string | null
}

export interface FindUsersTable {
    id: string, 
    username: string,
    avatar: string | null
}

export default UsersTable;
