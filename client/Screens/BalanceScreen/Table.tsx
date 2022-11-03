import React, { useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, TextInput, ScrollView } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { plazoFijo, plazoUVA, dolarConvert } from './BalanceFunctions';
import { onTypesOfDolars } from '../../Redux/actions';
import { Loading } from '../../Components/Loading/Loading';
import balanceStyle from './BalanceScreen.style';

export default function Table ({number}) {
    const dolar = useSelector<any>((state) => state.dolar);
    const dispatch = useDispatch<any>()

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

    return (
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
                            <Text style={balanceStyle.text}>Plazo fijo UVA (precancelable)</Text>
                        </Row>
                    </Col>
                    <Col size={50}>
                        <Row style={balanceStyle.rightCell}>
                            <Text style={balanceStyle.text}>Inversión</Text>
                        </Row>
                        <Row style={balanceStyle.rightCell}>
                            <Text style={balanceStyle.text}>{dolarConvert(turista.venta,number)}</Text>
                        </Row>
                        <Row style={balanceStyle.rightCell}>
                            <Text style={balanceStyle.text}>{dolarConvert(blue.venta,number)}</Text>
                        </Row>
                        <Row style={balanceStyle.rightCell}>
                            <Text style={balanceStyle.text}>{dolarConvert(ccl.venta,number)}</Text>
                        </Row>
                        <Row style={balanceStyle.rightCell}>
                            <Col size={25}>
                                <Row style={balanceStyle.insideCell}>
                                        <Text style={balanceStyle.text}>1 mes</Text>
                                </Row>
                                <Row style={balanceStyle.insideCell}>
                                        <Text style={balanceStyle.text}>{plazoFijo(Number(number),1)}</Text>
                                </Row>
                            </Col>
                            <Col size={25}>
                                <Row style={balanceStyle.insideCell}>
                                        <Text style={balanceStyle.text}>3 meses</Text>
                                </Row>
                                <Row style={balanceStyle.insideCell}>
                                        <Text style={balanceStyle.text}>{plazoFijo(Number(number),3)}</Text>
                                </Row>
                            </Col>
                        </Row>
                        <Row style={balanceStyle.rightCell}>
                        <Col size={25}>
                                <Row style={balanceStyle.insideCell}>
                                        <Text style={balanceStyle.text}>1 mes</Text>
                                </Row>
                                <Row style={balanceStyle.insideCell}>
                                        <Text style={balanceStyle.text}>{plazoUVA(Number(number),1)}</Text>
                                </Row>
                            </Col>
                            <Col size={25}>
                                <Row style={balanceStyle.insideCell}>
                                        <Text style={balanceStyle.text}>3 meses</Text>
                                </Row>
                                <Row style={balanceStyle.insideCell}>
                                        <Text style={balanceStyle.text}>{plazoFijo(Number(number),3)}</Text>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Grid>
    )
}