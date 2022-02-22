import FriendsTable from './FriendsTable';
import SessionTable from './SessionTable';
import UsersTable from './UsersTable';

type UsersTablesNames = 'Users' | 'Sessions' | 'Friends';

type AllUsersTablesRows = UsersTable | SessionTable | FriendsTable;

export { AllUsersTablesRows, UsersTablesNames };
