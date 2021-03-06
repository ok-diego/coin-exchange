import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Td = styled.td`
    border: 1px solid #ccc;
    width: 25vh;
`
const Button = styled.button `
    color: #282c34;;
`

export default class Coin extends Component {

    handleClick = (event) => {
        // Prevent the default action of submitting the form 
        event.preventDefault();
        this.props.handleRefresh(this.props.tickerId);
    }

    render() {
        return (
            <tr>
                <Td>{this.props.name}</Td>
                <Td>{this.props.ticker}</Td>
                <Td>${this.props.price}</Td>
                {this.props.showBalance ? <Td>{this.props.balance}</Td> : null}
                <Td>
                    <form action="#" method="POST">
                        <Button onClick={this.handleClick}>Refresh</Button>
                    </form>
                </Td>
            </tr>
        );
    }
}

// isRequired will give us an error message if we don't add all props
Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}