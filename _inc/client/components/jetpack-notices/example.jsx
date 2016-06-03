/**
 * External dependencies
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Button from 'components/button';
import notices from 'notices';
import { createNotice } from 'components/global-notices/state/notices/actions';

class GlobalNotices extends Component {
	constructor() {
		super( ...arguments );

		this.state = { useState: true };
		this.toggleUseState = this.toggleUseState.bind( this );
		this.showSuccessNotice = this.showNotice.bind( this, 'success' );
		this.showErrorNotice = this.showNotice.bind( this, 'error' );
		this.showInfoNotice = this.showNotice.bind( this, 'info' );
		this.showWarningNotice = this.showNotice.bind( this, 'warning' );
	}

	toggleUseState( event ) {
		this.setState( {
			useState: event.target.checked
		} );
	}

	showNotice( type ) {
		const message = `This is a ${ type } notice`;
		if ( this.state.useState ) {
			this.props.createNotice( `is-${ type }`, message );
		} else {
			notices[ type ]( message );
		}
	}

	render() {
		return (
			<div className="design-assets__group">
				<h2>
					<a href="/devdocs/design/global-notices">Global Notices</a>
				</h2>
				<Button onClick={ this.showSuccessNotice }>Show success notice</Button>
				<Button onClick={ this.showErrorNotice }>Show error notice</Button>
				<Button onClick={ this.showInfoNotice }>Show info notice</Button>
				<Button onClick={ this.showWarningNotice }>Show warning notice</Button>
			</div>
		);
	}
}

GlobalNotices.propTypes = {
	createNotice: PropTypes.func
};

const ConnectedGlobalNotices = connect( null, { createNotice } )( GlobalNotices );
ConnectedGlobalNotices.displayName = 'GlobalNotices';
export default ConnectedGlobalNotices;
