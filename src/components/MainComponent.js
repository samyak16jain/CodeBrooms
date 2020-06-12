import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './HeaderComponent';
import Home from './HomeComponent';
import Category from './CategoriesComponent';
import ProblemTable from './ProblemsComponent';

import { CATEGORIES } from '../shared/Problem_Category_wise';
import { DIVISIONLADDERS } from '../shared/Problem_Division_Wise';
import { RATINGLADDERS } from '../shared/Problem_Rating_Wise';

class Main extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			probCatWise : CATEGORIES,
			probDivWise : DIVISIONLADDERS,
			ProbRatWise : RATINGLADDERS,
		}
	}

	render(){
		const CategoryWithId = ({match}) => {
			return(
			  <ProblemTable item={this.state.probCatWise.filter((it)=> it.id === parseInt(match.params.categoryId,10))[0]}/>
			);
		};
	
		return (
			<div>
				<Header />
				<Switch>
					<Route path='/home' component={Home} />
					<Route exact path='/divisionladders' component='' />
					<Route exact path='/ratingladders' component='' />
					<Route exact path='/categories' component={()=> <Category categoryList = {this.state.probCatWise} />} />
					<Route path='/categories/:categoryId' component={CategoryWithId} />
					<Route path='/aboutpage' component='' />
					<Redirect to='/home' />
				</Switch>
			</div>
		);
	}
}

export default Main;
