import React, {Component} from 'react'; 
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import { Glyphicon,Button} from 'reactstrap';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

//Estilos del componente
import './css/InputsVariation.css';

class InputsMonths extends Component{
	constructor(){
		super();
		this.handleInputValueChange = this.handleInputValueChange.bind(this);
		this.handleClickDown = this.handleClickDown.bind(this);
		this.handleClickUp = this.handleClickUp.bind(this);
		this.funcModif = this.funcModif.bind(this);
	}

	funcModif(e){
		let valor = parseFloat(e.target.value);
		if(valor < this.props.min || valor > this.props.max){
			if(valor < this.props.min){
				e.target.value = this.props.min;
				this.handleInputValueChange(e);
				return;
			}else{
				e.target.value = this.props.max;
				this.handleInputValueChange(e);
				return;
			}
		}
		this.handleInputValueChange(e);
	}

	componentDidMount(){

		for(let k=0;k<12;k++){
				let id = this.props.paginaActual + "-" + k +  "-" + this.props.titulo + "-InputMonths";
				let input = document.getElementById(id);
				if(input !== null){
					input.value = this.props.pagvariaciones[k];
				}
			}
	}
	
	componentDidUpdate(){

			for(let k=0;k<12;k++){
				let id = this.props.paginaActual + "-" + k +  "-" + this.props.titulo + "-InputMonths";
				let input = document.getElementById(id);
				if(input !== null){
					input.value = this.props.pagvariaciones[k];
				}
			}
	}

	setInputsVariations(){
		let inputs = [];
		if(this.props.cantVariaciones > 0){
			for( let i= 0; i < 12; i++){
			    inputs.push(<input
				              type="number"
				              className="InputVariables"
				              min = "0"
				              id = {i + "-" + this.props.titulo + "-InputMonths"}
				              key = {i}
				              onBlur ={this.funcModif}
				              step="any"
				            />);
			};
			return inputs;	
		}
		return [];
	}

	setInputsVariationsEngorde(){
		let inputs = [];
		if(this.props.cantVariaciones > 0){
			for( let i= 0; i < 12; i++){
			    inputs.push(<input
				              type="number"
				              className="InputVariables"
				              min = "0"
				              id = {this.props.paginaActual + "-" + i + "-" + this.props.titulo + "-InputMonths"}
				              key = {i}
				              onBlur ={this.funcModif}
				              step="any"
				            />);
			};
			return inputs;	
		}
		return [];
	}

	handleInputValueChange(e){
		let valor = parseFloat(e.target.value);
		let id = e.target.id;
		id = parseInt(id.split("-")[1]);
		let pagina = this.props.paginaActual - 1;
		this.props.funcModiValorInput(id,pagina,valor);
		
	}
	/*
		Llamar a la accion que me setee la pagina actual
		tanto para la subida como para la bajada
	*/
	handleClickUp(){
		if(this.props.paginaActual < this.props.cantVariaciones){
			this.props.funcModiPagina(this.props.paginaActual+1);	
		}
		//this.setState({paginaActual : this.state.paginaActual + 1})
	}
	handleClickDown(){
		if(this.props.paginaActual > 1){
			this.props.funcModiPagina(this.props.paginaActual-1);	
		}
	}

	mostrarFlechaArriba(){
		if(this.props.cantVariaciones > 1){
			return (				
						<Button className="btn btn-outline-secondary" onClick={this.handleClickDown}><FaAngleRight/></Button>
				);	
		}
	}

	mostrarFlechaAbajo(){
		if(this.props.cantVariaciones > 1){
			return (
						<Button type="button" className="btn btn-outline-secondary glyphicon glyphicon-chevron-right" onClick={this.handleClickUp}><FaAngleRight/></Button>
				);	
		}
	}
	mostrarTitulo(){
		if(this.props.cantVariaciones > 1){
			return (
					<p className="labelPagina">Pagina:{this.props.paginaActual}</p>
				);	
		}
	}

	render(){
		let input = null;
		//Pagina 1 muestra el array[0]
		let paginaActual = this.props.paginaActual;
		if(this.props.esEngorde){
			input = this.setInputsVariationsEngorde();
			return(
			<div className="container-fluid">
				<Row>
					<Col>				
					{this.mostrarFlechaArriba()}
					</Col>
					<Col  className="divInputs">
						{this.mostrarTitulo()}
						<div id = "divInputs" className="divInputsVariation">
							{this.setInputsVariationsEngorde().map((input, key) => {
					            return(input);
							}
					        )}        
						</div>					
					</Col>
					<Col>
					{this.mostrarFlechaAbajo()}
					</Col>
				</Row>
			</div>
			);
		}else{
			input = this.setInputsVariations();
			return(
			<div className="container-fluid">
				<Row xs={12}>
					<Col>				
					{this.mostrarFlechaArriba()}
					</Col>
					<Col  className="divInputs">
						{this.mostrarTitulo()}
						<div id = "divInputs" className="divInputsVariation">
							{this.setInputsVariations().map((input, key) => {
					            return(input);
							}
					        )}        
						</div>				
					</Col>
					<Col>
					{this.mostrarFlechaAbajo()}
					</Col>
				</Row>
			</div>
			);
		}

	}
}
export default InputsMonths;


// WEBPACK FOOTER //
// src/components/Generales/InputsVariation.js