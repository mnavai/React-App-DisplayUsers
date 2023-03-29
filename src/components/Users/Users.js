import User from "../User/User";
const Users = ({users}) => (
    <div>
          {users.map(user => {
            return (
              <User user={user} />
            )
          })}
      </div>
); 
export default Users;