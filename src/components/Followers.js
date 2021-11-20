import { followUser, followingUser } from '../services/firestore';
import UserCardSimple from './UserCardSimple';

const divStyle = {
    display:'flex',
    flexDirection: 'row',
  };



function Followers({ uid, userMap }) {

    const onFollow = async (keyy, value) => {
        //TODO: usar transacciones
        try {
            await followUser(uid,keyy,value)
            await followingUser(keyy,uid,value)
        } catch (error) {
            console.error('error:',error)
        }
    }

    return (
        userMap!=null && Object.entries(userMap).sort().map(([keyy, value]) =>
        <div key={keyy+uid} style={divStyle}>
                <UserCardSimple key={keyy} uid={keyy} active={!!value} />
                {value ? <div>Eres su mentor</div> : <div>Quiere que seas su mentor</div>}
                {value ? <button onClick={()=>onFollow(keyy,false)}>Dejar de ser su mentor</button> 
                : 
                <button onClick={()=>onFollow(keyy,true)}>Acepta ser su mentor</button>}
            </div>
        )
    );
}
export default Followers;