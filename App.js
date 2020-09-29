
import React,{useState} from 'react';
import { StyleSheet, Text, View ,TextInput, Button} from 'react-native';

export default function App() {
 
  const[name,setname]=useState("")
  const[job,setjob]=useState("")
  const submitData=async()=>{
    fetch("https://reqres.in/api/users",{
        method:"post",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            name,
            job
        })
    }).then(res => res.json())
    .then(data=>{console.log(data)})
    }

  return (
    <View style={styles.container}>
      <TextInput 
      style={{borderBottomColor:"blue",height:50,width:250,borderColor:"blue",borderWidth:0.5,borderRadius:10,textAlign:"center",paddingRight:160}}
      value={name}
      onChangeText={text=>setname(text)}
      placeholder="Name"
      />
      <TextInput 
      style={{borderBottomColor:"blue",height:50,width:250,borderColor:"blue",borderWidth:0.5,borderRadius:10,textAlign:"center",paddingRight:160,marginTop:30,marginBottom:30}}
      value={job}
      onChangeText={text=>setjob(text)}
      placeholder="Job"
      />
      <Button
      onPress={submitData}
      
      title="submit" 
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
