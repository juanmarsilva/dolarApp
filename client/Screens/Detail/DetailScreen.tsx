import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { styles } from './DetailScreenStyles';
import { NavBar } from '../../Components/Navbar/NavBar';
import { useSelector } from 'react-redux';
import { Dimensions } from "react-native";
// import { infoAboutDolarPrice } from '../../Redux/actions';
import { LineChart } from 'react-native-chart-kit'
import PersonalButton from '../../Components/Buttons/Button';
import { colors } from '../../App.style';

const DetailScreen = ({ navigation, route }: any) => {
    const type = useSelector<any>(state => state.detailDolar);
    const dolar = useSelector<any>(state => state.evolution);
    // const infoDolar = useSelector<any>(state => state.infoDolar);
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
            <NavBar navigation={navigation} route={route} />
            <View style={styles.containerGraf}>
                <LineChart
                    data={data}
                    width={Dimensions.get('window').width - Dimensions.get('window').width * 0.1}
                    height={220}
                    yAxisLabel={'$'}
                    chartConfig={{
                    backgroundColor: '#e26a00',
                    backgroundGradientFrom: colors.selectedIntense,
                    backgroundGradientTo: colors.selected,
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
                active={active === 'day'}
                onPress={()=>onChangeChart('day')}
            />
            <PersonalButton 
                text="Mensual"
                active={active === 'month'}
                onPress={()=>onChangeChart('month')}
            />
        </View>
    );
};

export default DetailScreen;
