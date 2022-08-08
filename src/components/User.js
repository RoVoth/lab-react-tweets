function User(props) {
  return (
    <span className="user">
      {/* accedemos a el atributo userData */}
      <span className="name">{props.userData.name}</span>
      <span className="handle">{props.userData.handle}</span>
    </span>
  );
}
export default User;
