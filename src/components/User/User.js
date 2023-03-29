const User = ({user}) => (
    <div>
        <h3>
            {user.name}
        </h3>
        <ul>
            <li>Website: {user.website}</li>
            <li>City: {user.address.city}, Street: {user.address.street}</li>
        </ul>  
    </div>
);
export default User;