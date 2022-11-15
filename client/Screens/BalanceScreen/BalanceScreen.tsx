import React, { useState, useEffect } from "react";
import { View, Text, TextInput, ScrollView } from "react-native";
import balanceStyle from "./BalanceScreenStyles";
import Table from "./Table";
const TOKEN = process.env.REACT_APP_TOKEN

const BalanceScreen = ({ navigation, route }: any) => {
    const [number, setNumber] = useState<number>(0);
    const [uva, setUva] = useState<any>({})
    let inflacion:any = null
    useEffect(() => {
        if(!inflacion){
            fetch('https://api.estadisticasbcra.com/inflacion_mensual_oficial',{
                'headers':{
                    'Authorization':`Bearer ${TOKEN}`
                }
            })
            .then(res => setUva(res.json()))
            .catch(err => console.log(err))
        }
  },[])
    const addDot = (number: number) => {
        const string = number.toString();
        const newArray = [];
        for (let i = 0; i < string.length; i++) {
        newArray.push(string[i]);
        if ((string.length - (i + 1)) % 3 === 0 && i < string.length - 1)
            newArray.push(".");
        }
        return newArray.join("");
    };

    const onChangeInput = (text:string) => {
        if(text){
            const withOutComa = text.replace(',','')
            const withoutDot = withOutComa.split('.').join('')
            const number = Number(withoutDot)
            setNumber(number)
        } else{
            setNumber(0)
        }
    }
    if(uva._z) {
        inflacion = uva._z[uva._z.length-3].v + uva._z[uva._z.length-2].v + uva._z[uva._z.length-1].v + 0.25
    }
    return (
        <View style={balanceStyle.container} >
            <View style={balanceStyle.boxUp}>
                <Text style={balanceStyle.title}>Pesos argentinos</Text>
                <TextInput
                    keyboardType='numeric'
                    onChangeText={onChangeInput}
                    value={addDot(number)}
                    placeholder='0'
                    style={balanceStyle.input}
                />
            </View>
            <ScrollView style={balanceStyle.boxDown}>
                <Table number={number.toString()} inflacion={inflacion}/>
                <Text style={balanceStyle.textUVA}>*Este valor se obtuvo con la inflación de los últimos 3 meses, por lo que la inversión real puede variar</Text>
            </ScrollView>
        </View>
    );
};

export default BalanceScreen;
