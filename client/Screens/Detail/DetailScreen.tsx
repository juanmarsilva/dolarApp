import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { styles } from './DetailScreenStyles';
import { useSelector } from 'react-redux';
import { Dimensions } from "react-native";
import { LineChart } from 'react-native-chart-kit'
import PersonalButton from '../../Components/Buttons/Button';
import { colors } from '../../App.style';
import { Loading } from '../../Components/Loading/Loading';

const DetailScreen = () => {
    const {days, months, name}:any = useSelector<any>(state => state.evolution);
    const [date, setDate] = useState(days)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if(name){
            setLoading(false)
            setDate(days)
        } 
    },[name,days])

    if(loading) return <Loading/>

    const onChangeChart = (type:string) => {
        if(type === 'months') {
            setDate(months)
        }
        else {
            setDate(days)
        }
    }

    let sampleData = date?.map((day:any) => {
        return {x:Object.keys(day)[0],y:Object.values(day)[0] }
    })
    let data = {
        labels: sampleData?.map((x: any) => x.x),
        datasets: [
            {
                data: sampleData?.map((y:any) => y.y)
            }
        ]
    }

    return (
        <View style={styles.container} >
            <Text style={styles.title} > {`Dolar ${name}`} </Text>
            <View style={styles.containerGraf}>
                <LineChart
                    data={data}
                    width={Dimensions.get('window').width - Dimensions.get('window').width * 0.1}
                    height={220}
                    yAxisLabel={'$'}
                    chartConfig={{
                    backgroundGradientFrom: '#252524',
                    backgroundGradientTo: colors.buttonContainer,
                    decimalPlaces: 0,
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 12
                    }
                    }}
                    bezier
                    style={{
                        marginVertical: 8,
                        borderRadius: 12
                    }}
                />
            </View>
            <PersonalButton 
                text="Diario"
                color={date === days? colors.selectedIntense : colors.selected}
                onPress={()=>onChangeChart('days')}
            />
            <PersonalButton 
                text="Mensual"
                color={date === months? colors.selectedIntense : colors.selected}
                onPress={()=>onChangeChart('months')}
            />
        </View>
    );
};

export default DetailScreen;
