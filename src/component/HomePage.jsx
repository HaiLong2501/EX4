import React,{ useState } from 'react'

export default function HomePage() {
    const [data,setData]=useState([])


    const [input,setInput]=useState("")
    const changeInput=(event)=>{
        setInput(event.target.value);

    }

    const submit=()=>{
        let newData=[...data];
        if(input.trim()!==""){
            if(!data.includes(input)){
                newData.push(input)
            }
            else{
                alert("Giá trị đã được sử dụng")
            }
        }
        
        else{
            alert("Nhập giá trị vào input")
        };
        setData(newData);
        setInput("")
    }

    const renderContent=()=>{
        let newArr=[];
        for(let i=0; i<data.length;i++){
            newArr.push(
                <div style={{display:'flex',width:'220px',justifyContent:'space-between'}}>
                    <h3>{data[i]}</h3>
                    <button onClick={()=>{deleteItem(data[i])}}>delete</button>
                </div>
            )
        }
        return newArr
    }

    const deleteItem=(item)=>{
        let newData=[...data];
        let indexItem=newData.findIndex((it)=>{
            return it==item
        })
        newData.splice(indexItem,1)
        setData(newData)

    }
  return (
    <div>
        <h1>TaskList</h1>
       <input onChange={changeInput} type="text" value={input}/>
        <button onClick={()=>{submit()}}>Submit</button>
        {renderContent()}
    </div>
  )
}
