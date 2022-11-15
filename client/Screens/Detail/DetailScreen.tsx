import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { styles } from './DetailScreenStyles';
import { useSelector } from 'react-redux';
import { Dimensions } from "react-native";
import { LineChart } from 'react-native-chart-kit'
import PersonalButton from '../../Components/Buttons/Button';
import { colors } from '../../App.style';

const DetailScreen = ({ route }: any) => {
    const type = route.params.tipo;
    const dolar = useSelector<any>(state => state.evolution);
    const [days, months] = dolar[type]
    const [active, setActive] = useState('day')
    const [date, setDate] = useState(days)


    const onChangeChart = (type:string) => {
        if(type === 'month') {
            setDate(months)
            setActive('month')
        }
        else {
            setDate(days)
            setActive('day')
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
            <Text style={styles.title} > {`Dolar ${type}`} </Text>
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
                color={active === 'day'? colors.selectedIntense : colors.selected}
                onPress={()=>onChangeChart('day')}
            />
            <PersonalButton 
                text="Mensual"
                color={active === 'month'? colors.selectedIntense : colors.selected}
                onPress={()=>onChangeChart('month')}
            />
        </View>
    );
};

export default DetailScreen;
