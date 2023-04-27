import React, {useMemo, useState} from "react";

export default {
    title: 'useMemo',
}

export const DifficultCountingExample = () => {
    const [a, setA] = useState(5)
    const [b, setB] = useState(5)


    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(()=> {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 10000000){
                fake++
                const fakeValue = Math.random()
            }
            tempResultA = resultA *= i
        }
        return tempResultA
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB *= i
    }
    return <>
        <input type="text" value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input type="text" value={b} onChange={(e) => setB(+e.currentTarget.value)}/>

        <hr/>
        <div>
            Result for a : {resultA}
        </div>
        <div>
            Result for b : {resultB}
        </div>
    </>
}

const UsersSecret = (props: { users: Array<string>}) => {
    console.log('Users secret')
    return <div>
        {props.users.map((u,i) => <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {
    console.log('HelpsToReactMemo')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["Vlad","Ilya","Pasha"])

    const newArray = useMemo(()=> {
        const newArray = users.filter(u => u.toLowerCase().indexOf('a') > -1)
        return newArray
    }, [users])

    const addUser = () => {
        const newUser = [...users, "Vtuuuulk" + new Date().getTime()]
        setUsers(newUser)
    }

    return <>
        <button onClick={ () => setCounter(counter+1)}>+</button>
        <button onClick={()=>addUser()}>add user</button>
        {counter}
        <Users users={users} />
    </>

}