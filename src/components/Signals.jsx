import React from 'react';
import {Label} from '../components/Label';

export class Signals extends React.Component {
	render() {
		return <div>
			<Label caption="SINR" svalue={this.props.sinr} excelent={20} good={13} mid={0} title="SINR (Signal Interference + Noise Ratio) также называемый CINR (Carrier to Interference + Noise Ratio) и в некоторых модемах Ec/Io – отношение уровня полезного сигнала к уровню шума (или просто соотношение сигнал/шум)."/>
			<Label caption="RSSI" svalue={this.props.rssi} excelent={-65} good={-75} mid={-85} title="RSSI (Received Signal Strength Indicator) — индикатор уровня мощности принимаемого модемом сигнала."/>
			<Label caption="RSRQ" svalue={this.props.rsrq} excelent={-10} good={-15} mid={-20} title="RSRQ (Reference Signal Received Quality) – характеризует качество принятых пилотных сигналов. Значение RSRQ измеряется в дБ (dB)."/>
			<Label caption="RSRP" svalue={this.props.rsrp} excelent={-80} good={-90} mid={-100} title="RSRP (Reference Signal Received Power) – среднее значение мощности принятых пилотных сигналов (Reference Signal) или уровень принимаемого сигнала с Базовой Станции. Значение RSRP измеряется в дБм (dBm). При значениях RSRP= -120 dBm и ниже LTE-подключение может быть нестабильным или вообще не устанавливаться."/>
			<Label caption="CQI0" svalue={this.props.cqi0} excelent={12} good={9} mid={5} title="CQI (Channel Quality Indicator). Для каждой абонентской станции UE (User Equipment) и каждого частотного блока несущей формируются индикаторы качества канала CQI "/>
			<Label caption="CQI1" svalue={this.props.cqi1} excelent={12} good={9} mid={5} title="CQI (Channel Quality Indicator). Для каждой абонентской станции UE (User Equipment) и каждого частотного блока несущей формируются индикаторы качества канала CQI "/>
		</div>
	}
}