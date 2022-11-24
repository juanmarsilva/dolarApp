import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { plazoFijo, plazoUVA, dolarConvert } from './BalanceFunctions';
// import { onTypesOfDolars } from '../../Redux/actions';
import { Loading } from '../../Components/Loading/Loading';
import balanceStyle from './BalanceScreenStyles';
import { getAllCurrencies, getAllEvolutions } from '../../Redux/actions';

interface Structure {
    name: string;
    months: Array<any>;
    days: null
}
interface State {
    evolution: Structure
}

export default function Table({ number }: any) {
    const inflacion = useSelector((state:State) => state.evolution)
    const lastThreeMonthsInflation = inflacion.months.slice(-3)
    const acumulated = lastThreeMonthsInflation.reduce((acc:number, curr:number) => {
        return acc + Object.values(curr)[0]
    },0)
    const uva = acumulated + 0.25
    const dolar = useSelector<any>((state) => state.dolar);
    const dispatch = useDispatch<any>();

    useEffect(()=>{
        dispatch(getAllCurrencies())
        dispatch(getAllEvolutions('inflacion'))
    },[])
    
    const { blue, oficial, CCL, qatar, turista }: any = dolar;
    if (
      !Object.keys(blue).length ||
      !Object.keys(oficial).length ||
      !Object.keys(CCL).length ||
      !Object.keys(turista).length
    )
    return <Loading />;

    return (
        <Grid style={balanceStyle.table}>
                    <Col size={50}>
                        <Row style={balanceStyle.leftCell}>
                            <Text style={balanceStyle.text}>Tipo de inversión</Text>
                        </Row>
                        <Row style={balanceStyle.leftCell}>
                            <Text style={balanceStyle.text}>Dolar blue</Text>
                        </Row>
                        <Row style={balanceStyle.leftCell}>
                            <Text style={balanceStyle.text}>Dolar CCL</Text>
                        </Row>
                        <Row style={balanceStyle.leftCell}>
                            <Text style={balanceStyle.text}>Dolar turista</Text>
                        </Row>
                        <Row style={balanceStyle.leftCell}>
                            <Text style={balanceStyle.text}>Dolar Qatar</Text>
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
                            <Text style={balanceStyle.text}>{dolarConvert(blue.sellPrice,Number(number))}</Text>
                        </Row>
                        <Row style={balanceStyle.rightCell}>
                            <Text style={balanceStyle.text}>{dolarConvert(CCL.sellPrice,Number(number))}</Text>
                        </Row>
                        <Row style={balanceStyle.rightCell}>
                            <Text style={balanceStyle.text}>{dolarConvert(turista.sellPrice,Number(number))}</Text>
                        </Row>
                        <Row style={balanceStyle.rightCell}>
                            <Text style={balanceStyle.text}>{dolarConvert(qatar.sellPrice,Number(number))}</Text>
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
                                        <Text style={balanceStyle.text}>{plazoUVA(Number(number),1,uva)}</Text>
                                </Row>
                            </Col>
                            <Col size={25}>
                                <Row style={balanceStyle.insideCell}>
                                        <Text style={balanceStyle.text}>3 meses*</Text>
                                </Row>
                                <Row style={balanceStyle.insideCell}>
                                        <Text style={balanceStyle.text}>{plazoUVA(Number(number),3,uva)}</Text>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Grid>
    )
}
