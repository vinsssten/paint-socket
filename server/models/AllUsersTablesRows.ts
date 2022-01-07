import SessionTable from './SessionTable';
import UsersTable from './UsersTable';

type UsersTablesNames = 'Users' | 'Sessions';

type AllUsersTablesRows = UsersTable | SessionTable;

export { AllUsersTablesRows, UsersTablesNames };
