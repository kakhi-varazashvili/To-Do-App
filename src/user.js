const User = ({name, onChange, removeUser}) => {
    return (
        <div className='user-item'>


          <input type='text'  onChange={onChange} />
          {/* <p>Name: {name}</p> */}
          <button onClick={removeUser}>Remove User</button>

        </div>



    )
}


export default User