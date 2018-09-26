import React, { Component } from 'react';

//componentes genericos
import SingleInput from '../Generales/SingleInput';
import Picker from '../Generales/Picker';
import Tabla from '../Generales/Tabla';

//redux 
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {permitirVariaciones,modificarVariaciones,modificarDropdownSelected,modificarInputValueDigestibilidad,modificarInputValueRinde} from '../../actions/action-rastrojos.js';


//bootstrap
import {Dropdown, Table, DropdownToggle,DropdownItem,DropdownMenu,Container,Col, Row, Form, FormGroup,Label} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


import ContentOption from '../Generales/ContentOption'; 

class Rastrojo extends Component {



	constructor(props) {
    super(props);

    this.state = {
			cantidadVariaciones : 1,
			dropdownOpen: false
	}
		
    this.toggle = this.toggle.bind(this);
  } 

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }
  
	render(){
		const rastrojos = this.props.rastrojos;
		return(
			<Container>
				<Row>
					<Col><ContentOption state = {rastrojos} 
										funcPermitir = {this.props.permitirVariaciones}
										funcVariaciones = {this.props.modificarVariaciones}/></Col>
				</Row> 
				
					<Form>
						        <FormGroup row>
						        	
						          	<Col sm="4">
							          	<Picker 
											id="Pasturas"
							                opciones         = {this.props.rastrojos.nombreRastrojos}
									        dropDownSelected = {this.props.rastrojos.dropdownSelected}
									        funcSelected     = {this.props.modificarDropdownSelected}/>
									</Col>
									<Label for="Pasturas" sm={4}> Selección: {this.props.rastrojos.nombreRastrojos[this.props.rastrojos.dropdownSelected]} </Label>
						        </FormGroup>
						    </Form>
				<Row>
					 <Tabla 
					 			texto1 = {"Digestibilidad"}
					 			texto2 = {"Rendimiento"}					 			
					 			valor1 = {this.props.rastrojos.valoresSimulacion[this.props.rastrojos.dropdownSelected].digestValue}
					 			valor2 = {this.props.rastrojos.valoresSimulacion[this.props.rastrojos.dropdownSelected].yieldValue}
					 />
					 
				</Row>
				<Row>
				   <Col>
				   		<p>Digestibilidad del Diferido[50-90]% </p>
				   		<SingleInput funcModificar = {this.props.modificarInputValueDigestibilidad}
				   					 arrayVariaciones = {this.props.rastrojos.digestibilidadVariaciones}
				   					 cantVariaciones = {this.props.rastrojos.cantVariaciones} 
				   					 seccionElegida = {this.props.rastrojos.dropdownSelected}/>
				   </Col>
				   <Col>
				   		<p>Rinde del Diferido [15-200] /ha</p>
				   		<SingleInput funcModificar = {this.props.modificarInputValueRinde}
				   					 arrayVariaciones = {this.props.rastrojos.rindeVariaciones}
				   					 cantVariaciones = {this.props.rastrojos.cantVariaciones} 
				   					 seccionElegida = {this.props.rastrojos.dropdownSelected}/>
				   </Col>
			   </Row>
			  </Container>
		);
	}
}

function mapStateToProps(state){
	console.log("mapStateToProps"+state);
    return {
        rastrojos: state.rastrojos
    };
}

function matchDispatchToProps(dispatch){
	console.log("matchDispatchToProps");
    return bindActionCreators({permitirVariaciones: permitirVariaciones,modificarVariaciones : modificarVariaciones,modificarDropdownSelected : modificarDropdownSelected,modificarInputValueDigestibilidad:modificarInputValueDigestibilidad,modificarInputValueRinde : modificarInputValueRinde}, dispatch);
    
}

export default connect(mapStateToProps, matchDispatchToProps)(Rastrojo);