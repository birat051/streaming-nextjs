import styles from './page.module.css'
import { wait,getAllUsers } from '@/services/getUsers'

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}


export default async function Home() {
  const {data,error}=await getAllUsers()
  return (
    <main className={styles.main}>
    {data && <div className={styles.usercontainer}>
      <h1 className={styles.heading}>Users</h1>
      {data.map((user:User)=>{
        return (
          <h2 key={user.id} className={styles.nameheading}>{user.name}</h2>
        )
      })}
      </div>}
      {error && <p className={styles.paragraphstyle}>{error}</p>}
      </main>
  )
}
