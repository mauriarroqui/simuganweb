import React, { Component } from 'react';

import SingleInput from '../Generales/SingleInput'

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {Dropdown, DropdownToggle,DropdownItem,DropdownMenu,Container,Col, Row} from 'reactstrap';
import {permitirVariaciones,modificarVariaciones,modificarDropdownSelected,modificarInputValueDigestibilidad,modificarInputValueRinde} from '../../actions/action-diferidos.js';
import 'bootstrap/dist/css/bootstrap.min.css';

// components 

import ContentOption from '../Generales/ContentOption'; 

class Diferido extends Component {



	constructor(props) {
    super(props);

    this.state = {
			cantidadVariaciones : 1,
			dropdownOpen: false
	}
		
    this.toggle = this.toggle.bind(this);
    //this.generarInputs = this.generarInputs.bind(this);
    //this.setDropdownSelected = this.setDropdownSelected.bind(this);
  } 

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  generarPasturas(){
  	var pasturas = ["Sorgo","pastura 2", "pastura 3"];
  	var rows = [];
  	for(var i = 0;i < pasturas.length;i++){
  		rows[i] = pasturas[i];
  	}
  	return pasturas;
  }


  setDropdownSelected(){
  	//este arreglo se debe cargar desde el xml parseado
  	  	var pasturas = ['Sorgo','pastura 2', 'pastura 3'];
 		let aux =pasturas[this.props.diferidos.dropdownSelected] 
  	return aux;
  }
  

	render(){
		const diferidos = this.props.diferidos;
		return(
			<Container>
				<Row>
					<Col><ContentOption state = {diferidos} 
										funcPermitir = {this.props.permitirVariaciones}
										funcVariaciones = {this.props.modificarVariaciones}/></Col>
				</Row> 
				<Row>
					<Col> 
					    	<Dropdown  isOpen={this.state.dropdownOpen} toggle={this.toggle}>
						        <DropdownToggle color = "success" caret>
						        	 {this.setDropdownSelected()}
						        </DropdownToggle>
						        <DropdownMenu>
						          	<DropdownItem onClick={this.props.modificarDropdownSelected} header>Pasturas</DropdownItem>
						          	{this.generarPasturas().map((object,i)=>{
						          		return <DropdownItem onClick = {this.props.modificarDropdownSelected} key = {i} id = {i} >{object}</DropdownItem>;
						          	})}
						        </DropdownMenu>
					      	</Dropdown>
					      	
				   </Col>
				   <Col>
				   		<p>Digestibilidad del Diferido[50-90]% </p>
				   		<SingleInput funcModificar = {this.props.modificarInputValueDigestibilidad}
				   					 arrayVariaciones = {this.props.diferidos.digestibilidadVariaciones}
				   					 cantVariaciones = {this.props.diferidos.cantVariaciones} 
				   					 seccionElegida = {this.props.diferidos.dropdownSelected}/>
				   </Col>
				   <Col>
				   		<p>Rinde del Diferido [15-200] /ha</p>
				   		<SingleInput funcModificar = {this.props.modificarInputValueRinde}
				   					 arrayVariaciones = {this.props.diferidos.rindeVariaciones}
				   					 cantVariaciones = {this.props.diferidos.cantVariaciones} 
				   					 seccionElegida = {this.props.diferidos.dropdownSelected}/>
				   </Col>
			   </Row>
			  </Container>
		);
	}
}

function mapStateToProps(state){
	console.log("mapStateToProps"+state);
    return {
        diferidos: state.diferidos
    };
}

function matchDispatchToProps(dispatch){
	console.log("matchDispatchToProps");
    return bindActionCreators({permitirVariaciones: permitirVariaciones,modificarVariaciones : modificarVariaciones,modificarDropdownSelected : modificarDropdownSelected,modificarInputValueDigestibilidad:modificarInputValueDigestibilidad,modificarInputValueRinde : modificarInputValueRinde}, dispatch);
    
}

export default connect(mapStateToProps, matchDispatchToProps)(Diferido);