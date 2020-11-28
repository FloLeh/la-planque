import React, { Component } from "react";
import './ScrollToTop.css'
import $ from 'jquery'

export class ScrollToTop extends Component {
	toTop() {
		$('html, body').animate(
			{ scrollTop: '0' }, 600
		)
	}

	render() {
		return (
      <button onClick={() => this.toTop()} className='scrollToTop'>
      </button>
    )
	}
}

export default ScrollToTop