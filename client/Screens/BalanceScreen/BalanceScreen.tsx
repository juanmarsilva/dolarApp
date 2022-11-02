import React, { useState, useEffect} from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { useDispatch, useSelector } from 'react-redux';
import { onTypesOfDolars } from '../../Redux/actions';
import { NavBar } from '../../Components/Navbar/NavBar';
import balanceStyle from './BalanceScreen.style';
import { Loading } from '../../Components/Loading/Loading';

const BalanceScreen = ({navigation, route}: any) => {
    const dolar = useSelector<any>((state) => state.dolar);
    const dispatch = useDispatch<any>()
    const [number, setNumber] = useState<number>(1)

    useEffect(()=>{
        dispatch(onTypesOfDolars())
    },[])
    
    const { blue, oficial, ccl, bolsa, turista }: any = dolar;
    if (
      !Object.keys(blue).length ||
      !Object.keys(oficial).length ||
      !Object.keys(ccl).length
    )
      return <Loading />;
    
    function round(num:any) {
        const recived = number/Number(num.replace(',','.'))
        const m = Number((Math.abs(recived) * 100).toPrecision(15));
        return Math.round(m) / 100 * Math.sign(recived);
    }

    function plazoFijo(num:number,divisor:number) {
        const prev = num + num*(0.75/(12/divisor))
        const m = Number((Math.abs(prev) * 100).toPrecision(15));
        return Math.round(m) / 100 * Math.sign(prev);
    }

    return (
        <View style={balanceStyle.container} >
            <View style={balanceStyle.boxUp}>
                <Text style={balanceStyle.title}>Pesos</Text>
                <TextInput
                    keyboardType='numeric'
                    onChangeText={text => setNumber(Number(text))}
                    value={number}
                    placeholder='1'
                    style={balanceStyle.input}
                />
            </View>
            <ScrollView style={balanceStyle.boxDown}>
                <Grid style={balanceStyle.table}>
                    <Col size={50}>
                        <Row style={balanceStyle.leftCell}>
                            <Text style={balanceStyle.text}>Tipo de inversión</Text>
                        </Row>
                        <Row style={balanceStyle.leftCell}>
                            <Text style={balanceStyle.text}>Dolar turista</Text>
                        </Row>
                        <Row style={balanceStyle.leftCell}>
                            <Text style={balanceStyle.text}>Dolar blue</Text>
                        </Row>
                        <Row style={balanceStyle.leftCell}>
                            <Text style={balanceStyle.text}>Dolar CCL</Text>
                        </Row>
                        <Row style={balanceStyle.leftCell}>
                            <Text style={balanceStyle.text}>Plazo fijo comun (75% anual)</Text>
                        </Row>
                        <Row style={balanceStyle.leftCell}>
                            <Text style={balanceStyle.text}>Plazo fijo UVA</Text>
                        </Row>
                    </Col>
                    <Col size={50}>
                        <Row style={balanceStyle.rightCell}>
                            <Text style={balanceStyle.text}>Inversión</Text>
                        </Row>
                        <Row style={balanceStyle.rightCell}>
                            <Text style={balanceStyle.text}>{round(turista.venta)}</Text>
                        </Row>
                        <Row style={balanceStyle.rightCell}>
                            <Text style={balanceStyle.text}>{round(blue.venta)}</Text>
                        </Row>
                        <Row style={balanceStyle.rightCell}>
                            <Text style={balanceStyle.text}>{round(ccl.venta)}</Text>
                        </Row>
                        <Row style={balanceStyle.rightCell}>
                            <Col size={25}>
                                <Row style={balanceStyle.insideCell}>
                                        <Text style={balanceStyle.text}>1 mes</Text>
                                </Row>
                                <Row style={balanceStyle.insideCell}>
                                        <Text style={balanceStyle.text}>{plazoFijo(number,1)}</Text>
                                </Row>
                            </Col>
                            <Col size={25}>
                                <Row style={balanceStyle.insideCell}>
                                        <Text style={balanceStyle.text}>3 meses</Text>
                                </Row>
                                <Row style={balanceStyle.insideCell}>
                                        <Text style={balanceStyle.text}>{plazoFijo(number,3)}</Text>
                                </Row>
                            </Col>
                        </Row>
                        <Row style={balanceStyle.rightCell}>
                        <Col size={25}>
                                <Row style={balanceStyle.insideCell}>
                                        <Text style={balanceStyle.text}>1 mes</Text>
                                </Row>
                                <Row style={balanceStyle.insideCell}>
                                        <Text style={balanceStyle.text}>X</Text>
                                </Row>
                            </Col>
                            <Col size={25}>
                                <Row style={balanceStyle.insideCell}>
                                        <Text style={balanceStyle.text}>3 meses</Text>
                                </Row>
                                <Row style={balanceStyle.insideCell}>
                                        <Text style={balanceStyle.text}>{plazoFijo(number,3)}</Text>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Grid>
            </ScrollView>
            <NavBar navigation={navigation} route={route} />
        </View>
    );
};

export default BalanceScreen;

