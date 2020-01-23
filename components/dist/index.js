'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var styled = _interopDefault(require('styled-components'));

const Button = styled.button`
  background: #2cc1ed;
  color: #fff;
  border: 1px solid #1d99bd;
  border-radius: 2px;
  padding: 10px;
  width: 100%;
  outline: none;
  font-size: 16px;
`;

const Card = styled.div`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 10px;
`;

exports.Button = Button;
exports.Card = Card;
