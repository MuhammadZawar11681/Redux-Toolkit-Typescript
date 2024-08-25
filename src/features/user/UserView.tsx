import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { fetchUsers } from './userSlice'

export const UserView = () => {
  const user = useAppSelector(state => state.user)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  return (
    <div>
      <h2>User List</h2>
      {user.loading && <div>Loading...</div>}
      {user.error && <div className="App-error">Error: {user.error}</div>}
      {!user.loading && user.users.length > 0 && (
        <ul className="App-list">
          {user.users.map(user => (
            <li key={user.id} className="App-list-item">{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  )
}
